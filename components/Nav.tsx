"use client";

import { site } from "@/lib/site";
import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    const sentinel = document.getElementById("scroll-sentinel");
    if (sentinel) observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bone/90 backdrop-blur-md border-b border-ink/10" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-mono text-xs tracking-widest uppercase flex items-center gap-2.5"
        >
          <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-ink text-bone text-[10px] font-semibold">
            {site.initials}
          </span>
          <span className="hidden sm:block">{site.name}</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link-underline">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden md:inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-ink/50">
            <span className="relative inline-block h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-ember" />
            </span>
            {site.status}
          </span>
          <a
            href="#contact"
            className="font-mono text-xs uppercase tracking-widest px-4 py-2 bg-ink text-bone hover:bg-ember transition-colors duration-200"
          >
            Let's talk
          </a>
        </div>
      </div>
    </header>
  );
}
