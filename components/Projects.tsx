"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  { title: "Kitchen & Bathroom", id: 3, videoUrl: "https://www.facebook.com/reel/2079774746127030/" },
  { title: "Extension & Terrace", id: 4, images: TERRACE_REEL_SLIDES },
];

const gradients = [
  "linear-gradient(135deg, #2c2c2c 0%, #4a4039 100%)",
  "linear-gradient(135deg, #4a4039 0%, #1a1614 100%)",
  "linear-gradient(135deg, #1a1614 0%, #2c2c2c 100%)",
  "linear-gradient(135deg, #3d3d3d 0%, #4a4039 100%)",
  "linear-gradient(135deg, #4a4039 0%, #2c2c2c 100%)",
  "linear-gradient(135deg, #2c2c2c 0%, #1a1614 100%)",
];

function ProjectCard({
  project,
  index,
  onOpenVideo,
  onOpenReel,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
  onOpenVideo: (url: string, title: string) => void;
  onOpenReel: (title: string, slides: ImageReelSlide[]) => void;
}) {
  const i = index;
  if (project.videoUrl) {
    return (
      <button
        type="button"
        onClick={() => onOpenVideo(project.videoUrl!, project.title)}
        aria-label={`${project.title} — watch video`}
        className="group relative aspect-[4/3] w-full overflow-hidden rounded-[1.25rem] flex flex-col items-end justify-end p-6 text-left focus:outline-none focus:ring-2 focus:ring-[#4a4039] focus:ring-inset cursor-pointer"
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
    );
  }
  if (project.images) {
    return (
      <button
        type="button"
        onClick={() => onOpenReel(project.title, project.images)}
        aria-label={`${project.title} — view before & after`}
        className="group relative aspect-[4/3] w-full overflow-hidden rounded-[1.25rem] flex flex-col items-end justify-end p-6 text-left focus:outline-none focus:ring-2 focus:ring-[#4a4039] focus:ring-inset cursor-pointer"
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
    );
  }
  return (
    <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[1.25rem] flex flex-col items-end justify-end p-6 text-left">
      <div
        className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
        style={{ background: gradients[i % gradients.length] }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative text-lg font-semibold text-white opacity-0 transition-all duration-300 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
        {project.title}
      </span>
    </div>
  );
}

export default function Projects() {
  const [modalVideo, setModalVideo] = useState<{ url: string; title: string } | null>(null);
  const [modalReel, setModalReel] = useState<{ title: string; slides: ImageReelSlide[] } | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const openVideo = (url: string, title: string) => setModalVideo({ url, title });
  const openReel = (title: string, slides: ImageReelSlide[]) => setModalReel({ title, slides });

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

        {/* Mobile: compact buttons that expand to show project card */}
        <div className="md:hidden space-y-2">
          {PROJECTS.map((project) => (
            <div key={project.id}>
              <button
                type="button"
                onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                aria-expanded={expandedId === project.id}
                aria-controls={`project-detail-${project.id}`}
                id={`project-btn-${project.id}`}
                className="flex w-full items-center justify-between rounded-xl border border-[#e8e0d5] bg-[#faf9f7] px-4 py-3 text-left text-[#2c2c2c] font-medium transition-colors hover:bg-[#e8e0d5]/50 focus:outline-none focus:ring-2 focus:ring-[#4a4039] focus:ring-offset-2"
              >
                <span>{project.title}</span>
                <svg
                  className={`h-5 w-5 shrink-0 text-[#3d3d3d] transition-transform ${expandedId === project.id ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {expandedId === project.id && (
                  <motion.div
                    id={`project-detail-${project.id}`}
                    role="region"
                    aria-labelledby={`project-btn-${project.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 pb-2">
                      <ProjectCard
                        project={project}
                        index={PROJECTS.indexOf(project)}
                        onOpenVideo={openVideo}
                        onOpenReel={openReel}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Desktop: full grid of cards */}
        <div className="hidden md:grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-[1.25rem]"
            >
              <ProjectCard
                project={project}
                index={i}
                onOpenVideo={openVideo}
                onOpenReel={openReel}
              />
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
