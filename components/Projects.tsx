"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import VideoModal from "./VideoModal";
import ImageReelModal, { type ImageReelSlide } from "./ImageReelModal";

// Terrace before/after reel: before first, then after (order matches user request)
const TERRACE_REEL_SLIDES: ImageReelSlide[] = [
  { src: "/images/terrace/TerraceB4_1.jpg", label: "Before" },
  { src: "/images/terrace/terraceb4_2.jpg", label: "Before" },
  { src: "/images/terrace/TerraceAfter_1.jpg", label: "After" },
  { src: "/images/terrace/terraceafter_2.jpg", label: "After" },
];

const PROJECTS = [
  { title: "Villa Renovation", id: 1 },
  { title: "Commercial Fit-Out", id: 2 },
  { title: "New Build Home", id: 3 },
  { title: "Kitchen & Bathroom", id: 4, videoUrl: "https://www.facebook.com/reel/2079774746127030/" },
  { title: "Extension & Terrace", id: 5, images: TERRACE_REEL_SLIDES },
  { title: "Full Structural Refurb", id: 6 },
];

const gradients = [
  "linear-gradient(135deg, #2c2c2c 0%, #4a4039 100%)",
  "linear-gradient(135deg, #4a4039 0%, #1a1614 100%)",
  "linear-gradient(135deg, #1a1614 0%, #2c2c2c 100%)",
  "linear-gradient(135deg, #3d3d3d 0%, #4a4039 100%)",
  "linear-gradient(135deg, #4a4039 0%, #2c2c2c 100%)",
  "linear-gradient(135deg, #2c2c2c 0%, #1a1614 100%)",
];

export default function Projects() {
  const [modalVideo, setModalVideo] = useState<{ url: string; title: string } | null>(null);
  const [modalReel, setModalReel] = useState<{ title: string; slides: ImageReelSlide[] } | null>(null);

  return (
    <section
      id="projects"
      className="relative scroll-mt-20 bg-white py-20 sm:py-24 lg:py-28"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14 lg:mb-18"
        >
          <h2 id="projects-heading" className="text-3xl font-bold text-[#2c2c2c] sm:text-4xl lg:text-5xl">
            Our Projects
          </h2>
          <p className="mt-4 text-lg text-[#3d3d3d]">
            A selection of residential and commercial projects we have delivered across Lanzarote.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-[1.25rem]"
            >
              {project.videoUrl ? (
                <button
                  type="button"
                  onClick={() => setModalVideo({ url: project.videoUrl!, title: project.title })}
                  aria-label={`${project.title} — watch video`}
                  className="absolute inset-0 flex flex-col items-end justify-end p-6 text-left focus:outline-none focus:ring-2 focus:ring-[#4a4039] focus:ring-inset rounded-[1.25rem] cursor-pointer w-full"
                >
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                    style={{ background: gradients[i % gradients.length] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative text-lg font-semibold text-white opacity-0 transition-all duration-300 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                    {project.title}
                  </span>
                  <span className="relative mt-1 flex items-center gap-1 text-sm text-white/90 opacity-0 transition-all duration-300 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Watch video
                  </span>
                </button>
              ) : project.images ? (
                <button
                  type="button"
                  onClick={() => setModalReel({ title: project.title, slides: project.images })}
                  aria-label={`${project.title} — view before & after`}
                  className="absolute inset-0 flex flex-col items-end justify-end p-6 text-left focus:outline-none focus:ring-2 focus:ring-[#4a4039] focus:ring-inset rounded-[1.25rem] cursor-pointer w-full"
                >
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                    style={{ background: gradients[i % gradients.length] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative text-lg font-semibold text-white opacity-0 transition-all duration-300 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                    {project.title}
                  </span>
                  <span className="relative mt-1 flex items-center gap-1 text-sm text-white/90 opacity-0 transition-all duration-300 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6 6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Before & After
                  </span>
                </button>
              ) : (
                <div className="absolute inset-0 flex flex-col items-end justify-end p-6 text-left rounded-[1.25rem]">
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                    style={{ background: gradients[i % gradients.length] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative text-lg font-semibold text-white opacity-0 transition-all duration-300 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                    {project.title}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <VideoModal
        isOpen={!!modalVideo}
        onClose={() => setModalVideo(null)}
        videoUrl={modalVideo?.url ?? ""}
        title={modalVideo?.title}
      />
      <ImageReelModal
        isOpen={!!modalReel}
        onClose={() => setModalReel(null)}
        title={modalReel?.title}
        slides={modalReel?.slides ?? []}
      />
    </section>
  );
}
