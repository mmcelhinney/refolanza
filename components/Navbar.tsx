"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-[0_4px_24px_rgba(44,44,44,0.06)]" : "bg-transparent"
      }`}
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className={`text-xl font-bold tracking-tight transition-colors ${
            isScrolled ? "text-[#2c2c2c]" : "text-white"
          }`}
        >
          ReforLanza
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="menubar">
          {NAV_LINKS.map((link) => (
            <li key={link.href} role="none">
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                role="menuitem"
                className={`text-sm font-medium transition-colors hover:opacity-80 ${
                  isScrolled ? "text-[#2c2c2c]" : "text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((o) => !o)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isScrolled ? "text-[#2c2c2c]" : "text-white"
          }`}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-white border-t border-[#e8e0d5]"
            role="dialog"
            aria-label="Mobile menu"
          >
            <ul className="px-4 py-6 space-y-1" role="menubar">
              {NAV_LINKS.map((link) => (
                <li key={link.href} role="none">
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    role="menuitem"
                    className="block py-3 text-[#2c2c2c] font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
