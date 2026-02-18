"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  { title: "Villa Renovation", id: 1 },
  { title: "Commercial Fit-Out", id: 2 },
  { title: "New Build Home", id: 3 },
  { title: "Kitchen & Bathroom", id: 4 },
  { title: "Extension & Terrace", id: 5 },
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
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-[1.25rem]"
            >
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{ background: gradients[i % gradients.length] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-end p-6">
                <span className="text-lg font-semibold text-white opacity-0 transition-all duration-300 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                  {project.title}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
