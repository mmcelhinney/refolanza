"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export type ImageReelSlide = {
  src: string;
  label?: string; // e.g. "Before" or "After"
};

type ImageReelModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  slides: ImageReelSlide[];
};

export default function ImageReelModal({ isOpen, onClose, title, slides }: ImageReelModalProps) {
  const [index, setIndex] = useState(0);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, [slides.length]);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (!isOpen) return;
    setIndex(0);
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (slides.length === 0) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="image-reel-modal-title"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-label="Close modal"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-4xl rounded-[1.25rem] bg-[#2c2c2c] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-4 py-3 border-b border-white/10">
              {title && (
                <h2 id="image-reel-modal-title" className="text-lg font-semibold text-white truncate">
                  {title}
                </h2>
              )}
              {slides[index]?.label && (
                <span className="text-sm font-medium text-white/80 uppercase tracking-wider">
                  {slides[index].label}
                </span>
              )}
              <button
                type="button"
                onClick={onClose}
                className="ml-auto flex h-10 w-10 items-center justify-center rounded-full text-white/80 hover:bg-white/10 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Close"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="relative aspect-[4/3] w-full bg-black">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slides[index].src}
                    alt={slides[index].label ? `${title ?? "Image"} - ${slides[index].label}` : title ?? "Image"}
                    fill
                    className="object-contain"
                    sizes="(max-width: 896px) 100vw, 896px"
                  />
                </motion.div>
              </AnimatePresence>

              {slides.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous image"
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next image"
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {slides.length > 1 && (
              <div
                className="flex justify-center gap-2 py-3"
                role="tablist"
                aria-label="Image reel"
              >
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Image ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === index ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
