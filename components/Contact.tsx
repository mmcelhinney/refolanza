"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("done"), 800);
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 bg-white py-20 sm:py-24 lg:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14 lg:mb-18"
        >
          <h2 id="contact-heading" className="text-3xl font-bold text-[#2c2c2c] sm:text-4xl lg:text-5xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-[#3d3d3d]">
            Request a quote or ask us anything. We operate across Lanzarote and will get back to you promptly.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              noValidate
              aria-label="Contact form"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#2c2c2c]">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-2 block w-full rounded-xl border border-[#e8e0d5] bg-[#faf9f7] px-4 py-3 text-[#2c2c2c] placeholder:text-[#3d3d3d]/60 focus:border-[#4a4039] focus:outline-none focus:ring-2 focus:ring-[#4a4039]/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#2c2c2c]">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-2 block w-full rounded-xl border border-[#e8e0d5] bg-[#faf9f7] px-4 py-3 text-[#2c2c2c] placeholder:text-[#3d3d3d]/60 focus:border-[#4a4039] focus:outline-none focus:ring-2 focus:ring-[#4a4039]/20"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#2c2c2c]">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="mt-2 block w-full rounded-xl border border-[#e8e0d5] bg-[#faf9f7] px-4 py-3 text-[#2c2c2c] placeholder:text-[#3d3d3d]/60 focus:border-[#4a4039] focus:outline-none focus:ring-2 focus:ring-[#4a4039]/20"
                  placeholder="+34 600 000 000"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#2c2c2c]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-2 block w-full rounded-xl border border-[#e8e0d5] bg-[#faf9f7] px-4 py-3 text-[#2c2c2c] placeholder:text-[#3d3d3d]/60 focus:border-[#4a4039] focus:outline-none focus:ring-2 focus:ring-[#4a4039]/20 resize-y min-h-[120px]"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-full bg-[#2c2c2c] px-8 py-4 text-base font-semibold text-white shadow-[0_4px_24px_rgba(44,44,44,0.15)] transition-all hover:bg-[#1a1614] focus:outline-none focus:ring-2 focus:ring-[#2c2c2c] focus:ring-offset-2 disabled:opacity-70"
              >
                {status === "idle" && "Send message"}
                {status === "submitting" && "Sending…"}
                {status === "done" && "Message sent"}
              </button>
            </form>
          </motion.div>

          {/* Contact info + Map placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="rounded-[1.25rem] bg-[#faf9f7] p-8 border border-[#e8e0d5]/50">
              <h3 className="text-lg font-semibold text-[#2c2c2c]">Contact details</h3>
              <ul className="mt-4 space-y-4" role="list">
                <li>
                  <span className="text-[#3d3d3d]">Email:</span>{" "}
                  <a href="mailto:info@reforlanza.com" className="text-[#2c2c2c] font-medium hover:underline">
                    info@reforlanza.com
                  </a>
                </li>
                <li>
                  <span className="text-[#3d3d3d]">Phone:</span>{" "}
                  <a href="tel:+34600000000" className="text-[#2c2c2c] font-medium hover:underline">
                    +34 600 000 000
                  </a>
                </li>
                <li>
                  <span className="text-[#3d3d3d]">Location:</span>{" "}
                  <span className="text-[#2c2c2c] font-medium">Lanzarote, Canary Islands</span>
                </li>
                <li className="flex items-center gap-2 pt-2">
                  <a
                    href="https://www.facebook.com/andres.lizacanogallego"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-[#1877f2] text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#1877f2] focus:ring-offset-2"
                    aria-label="ReforLan on Facebook"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <span className="text-[#3d3d3d]">Follow us on</span>{" "}
                  <a
                    href="https://www.facebook.com/andres.lizacanogallego"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2c2c2c] font-medium hover:underline"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>

            {/* Google Maps embed placeholder */}
            <div
              className="aspect-[4/3] rounded-[1.25rem] overflow-hidden bg-[#e8e0d5] flex items-center justify-center"
              aria-label="Map placeholder - Lanzarote"
            >
              <div
                className="w-full h-full flex items-center justify-center text-[#3d3d3d] text-sm"
                style={{
                  background: "linear-gradient(135deg, #e8e0d5 0%, #d4c4b0 100%)",
                }}
              >
                <span>Map placeholder — Lanzarote</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
