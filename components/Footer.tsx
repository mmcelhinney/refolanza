"use client";

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

export default function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="bg-[#1a1614] text-white py-12 sm:py-14"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="text-xl font-bold tracking-tight">ReforLanza</p>
            <p className="mt-1 text-white/80 text-sm">Lanzarote, Canary Islands</p>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-6 sm:gap-8">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-10 pt-8 border-t border-white/10 text-center sm:text-left">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} ReforLanza. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
