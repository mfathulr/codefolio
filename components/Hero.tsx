import Image from "next/image";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <>
      <div id="scroll-sentinel" className="absolute top-0 left-0 w-px h-px" />

      <section id="top" className="relative pt-28 pb-20 md:pt-40 md:pb-24 px-6 lg:px-10 grain">
        <div className="mx-auto max-w-7xl">
          {/* Headline — left-aligned asymmetric split */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <Reveal delay={0.05}>
                <h1 className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.93] tracking-tighter">
                  Data Scientist
                  <br />
                  <span className="italic">building</span> ML solutions
                  <br />
                  that drive
                  <br />
                  <span className="text-ember">real business outcomes.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="mt-10 text-lg md:text-xl text-ink/65 leading-relaxed max-w-xl">
                  I turn complex data into practical solutions — from predictive modeling and forecasting to data pipelines and interactive dashboards. Open for freelance collaborations, consulting, and mentoring engagements.
                </p>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href="#work"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-ink text-bone font-mono text-xs uppercase tracking-widest hover:bg-ember transition-colors duration-200"
                  >
                    See selected work
                    <span className="transition-transform group-hover:translate-x-1">&#8594;</span>
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-ink/25 font-mono text-xs uppercase tracking-widest hover:bg-ink hover:text-bone transition-colors duration-200"
                  >
                    Start a project
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Portrait — asymmetric right column */}
            <div className="lg:col-span-5 flex justify-end">
              <Reveal delay={0.2} from="right">
                <div className="relative">
                  <div className="aspect-[3/4] w-full max-w-xs overflow-hidden">
                    <Image
                      src="/me.png"
                      alt="Fathul Radhiansyah"
                      width={480}
                      height={640}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      priority
                    />
                  </div>
                  {/* Status badge */}
                  <div className="absolute -bottom-3 -left-3 bg-ink text-bone px-3 py-2 font-mono text-[10px] uppercase tracking-widest">
                    <span className="inline-block h-2 w-2 rounded-full bg-ember mr-2" />
                    {site.status}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Stat strip */}
          <Reveal delay={0.35}>
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 divide-x divide-ink/20 border-x border-t border-ink/20">
              {[
                { k: "5+", v: "Years experience" },
                { k: "3+", v: "Production models shipped" },
                { k: "100+", v: "Students taught & mentored" },
                { k: "3.72", v: "GPA — Mathematics" },
              ].map((s) => (
                <div key={s.v} className="px-6 py-8 first:pl-0">
                  <div className="font-display text-4xl md:text-5xl tracking-tighter">
                    {s.k}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-ink/45 mt-2">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
