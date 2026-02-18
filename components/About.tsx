"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TARGET_YEARS = 20;

function AnimatedCounter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const steps = 30;
    const step = target / steps;
    const stepDuration = duration / steps;
    let current = 0;
    const t = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(t);
        return;
      }
      setCount(Math.floor(current));
    }, stepDuration);
    return () => clearInterval(t);
  }, [isInView, target]);

  return <span ref={ref}>{count}+</span>;
}

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 bg-[#faf9f7] py-20 sm:py-24 lg:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Placeholder image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-[#e8e0d5]"
          >
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, #4a4039 0%, #2c2c2c 50%, #1a1614 100%)",
              }}
            />
          </motion.div>

          <div>
            <motion.h2
              id="about-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-[#2c2c2c] sm:text-4xl lg:text-5xl"
            >
              About ReforLanza
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg text-[#3d3d3d] space-y-4"
            >
              <p>
                With over <strong className="text-[#2c2c2c]"><AnimatedCounter target={TARGET_YEARS} /> Years Experience</strong>, we have built a reputation for quality craftsmanship and reliability across Lanzarote.
              </p>
              <p>
                We specialise in all aspects of building work — from full renovations and new builds to extensions, bathrooms, kitchens, tiling and structural work. Every project is delivered by our professional team with the same attention to detail.
              </p>
              <p>
                We operate exclusively in Lanzarote, so we know the local conditions, regulations and suppliers. Whether your project is residential or commercial, we are here to deliver it to the highest standard.
              </p>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 space-y-3"
              role="list"
            >
              {["20+ years experience", "Local Lanzarote expertise", "Quality craftsmanship", "Reliable & professional team"].map((item, i) => (
                <li key={item} className="flex items-center gap-3 text-[#2c2c2c] font-medium">
                  <span className="flex h-2 w-2 rounded-full bg-[#4a4039]" aria-hidden />
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
