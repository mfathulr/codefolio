import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-bone px-6 lg:px-10 py-16 border-t border-bone/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-6">
            <Reveal>
              <div className="font-display text-5xl md:text-7xl tracking-tight leading-[0.95] mb-6">
                <em className="italic">{site.name}.</em>
              </div>
              <p className="text-bone/45 max-w-md leading-relaxed">
                Built from scratch in the open. Designed for hireability, opcodes, and serendipity.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-3">
            <Reveal delay={0.1}>
              <div className="font-mono text-[10px] uppercase tracking-widest text-bone/35 mb-4">
                Elsewhere
              </div>
              <ul className="space-y-2.5 font-mono text-sm">
                <li>
                  <a className="link-underline" href={site.socials.linkedin}>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a className="link-underline" href={site.socials.twitter}>
                    X / Twitter
                  </a>
                </li>
                <li>
                  <a className="link-underline" href={site.socials.github}>
                    GitHub
                  </a>
                </li>
                <li>
                  <a className="link-underline" href={site.socials.instagram}>
                    Instagram
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>
          <div className="md:col-span-3">
            <Reveal delay={0.15}>
              <div className="font-mono text-[10px] uppercase tracking-widest text-bone/35 mb-4">
                On this page
              </div>
              <ul className="space-y-2.5 font-mono text-sm">
                <li>
                  <a className="link-underline" href="#work">
                    Work
                  </a>
                </li>
                <li>
                  <a className="link-underline" href="#services">
                    Services
                  </a>
                </li>
                <li>
                  <a className="link-underline" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="link-underline" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-bone/10 flex items-center justify-between flex-wrap gap-4 font-mono text-[10px] uppercase tracking-widest text-bone/35">
          <div>
            &#169; {year} {site.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-ember" />
            Available for new projects
          </div>
        </div>
      </div>
    </footer>
  );
}
