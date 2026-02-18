"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Facebook Reel/video embed URL - same format as Facebook’s embed code.
 * Vertical Reels use width=267, height=476.
 */
function getFacebookEmbedUrl(videoUrl: string): string {
  const params = new URLSearchParams({
    height: "476",
    href: videoUrl,
    show_text: "false",
    width: "267",
    t: "0",
  });
  return `https://www.facebook.com/plugins/video.php?${params.toString()}`;
}

type VideoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
};

export default function VideoModal({ isOpen, onClose, videoUrl, title }: VideoModalProps) {
  useEffect(() => {
    if (!isOpen) return;
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

  const embedUrl = getFacebookEmbedUrl(videoUrl);

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
          aria-labelledby="video-modal-title"
        >
          {/* Backdrop - click to close */}
          <button
            type="button"
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-label="Close modal"
          />
          {/* Modal panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-3xl rounded-[1.25rem] bg-[#2c2c2c] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-4 py-3 border-b border-white/10">
              {title && (
                <h2 id="video-modal-title" className="text-lg font-semibold text-white truncate">
                  {title}
                </h2>
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
            {/* Vertical Reel: 267×476 — centered in modal */}
            <div className="flex justify-center bg-black py-6">
              <iframe
                src={embedUrl}
                title={title ?? "Video"}
                width={267}
                height={476}
                className="border-0 overflow-hidden"
                style={{ maxWidth: "100%" }}
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
            <p className="px-4 py-3 text-sm text-white/60">
              Video hosted on Facebook. If it doesn’t play here,{" "}
              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 underline hover:text-white"
              >
                open it on Facebook
              </a>
              .
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
