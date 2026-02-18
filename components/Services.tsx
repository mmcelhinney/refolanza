"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    title: "Full Renovations",
    description: "Complete transformation of your property, from design to finish. We manage every detail for a seamless result.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    ),
  },
  {
    title: "New Builds",
    description: "From foundations to handover. New construction projects delivered on time and to the highest standards.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    ),
  },
  {
    title: "Extensions",
    description: "Expand your living space with thoughtfully designed extensions that blend with your existing property.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    ),
  },
  {
    title: "Bathrooms & Kitchens",
    description: "Bespoke bathrooms and kitchens fitted to your needs. Tiling, plumbing and finishing all in-house.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h14v11H4V10z" />
    ),
  },
  {
    title: "Tiling & Flooring",
    description: "Professional tiling and flooring installation for indoor and outdoor spaces. Quality materials and craftsmanship.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    ),
  },
  {
    title: "Structural Work",
    description: "Foundations, load-bearing walls and structural repairs. Safe, compliant and built to last.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-20 bg-[#faf9f7] py-20 sm:py-24 lg:py-28"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14 lg:mb-18"
        >
          <h2 id="services-heading" className="text-3xl font-bold text-[#2c2c2c] sm:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-[#3d3d3d]">
            From full renovations to specialist trades — we deliver every aspect of building work in Lanzarote.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <motion.article
              key={service.title}
              variants={item}
              className="group rounded-[1.25rem] bg-white p-8 shadow-[0_4px_24px_rgba(44,44,44,0.06)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(44,44,44,0.08)] hover:-translate-y-1 border border-[#e8e0d5]/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8e0d5] text-[#2c2c2c] transition-colors group-hover:bg-[#d4c4b0]">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  {service.icon}
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[#2c2c2c]">{service.title}</h3>
              <p className="mt-3 text-[#3d3d3d] leading-relaxed">{service.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
