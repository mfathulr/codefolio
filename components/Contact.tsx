"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="contact"
      className="relative px-6 lg:px-10 py-24 md:py-36 border-t border-ink/10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="font-display text-5xl md:text-7xl tracking-tight leading-[0.95] mb-8">
                Let's work on
                <br />
                <em className="italic">your data</em>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-ink/65 leading-relaxed mb-12 max-w-sm">
                I read every message. If your project is a fit, you'll hear back within 48 hours with a scoped proposal and a clear plan.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="space-y-6">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-ink/40 mb-2">
                    Direct
                  </div>
                  <a
                    href={`mailto:${site.email}`}
                    className="font-display text-2xl md:text-3xl link-underline"
                  >
                    {site.email}
                  </a>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-ink/40 mb-2">
                    Calendly
                  </div>
                  <a href="#" className="font-display text-2xl md:text-3xl link-underline">
                    cal.com/{site.name.toLowerCase().replace(/\s/g, "")}
                  </a>
                </div>
                <div className="flex gap-3 pt-6">
                  <a
                    href={site.socials.linkedin}
                    className="font-mono text-[10px] uppercase tracking-widest px-4 py-2 border border-ink/25 hover:bg-ink hover:text-bone transition-colors duration-200"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={site.socials.twitter}
                    className="font-mono text-[10px] uppercase tracking-widest px-4 py-2 border border-ink/25 hover:bg-ink hover:text-bone transition-colors duration-200"
                  >
                    X / Twitter
                  </a>
                  <a
                    href={site.socials.github}
                    className="font-mono text-[10px] uppercase tracking-widest px-4 py-2 border border-ink/25 hover:bg-ink hover:text-bone transition-colors duration-200"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="md:col-span-7">
            <Reveal delay={0.1}>
              <div className="border border-ink/20 p-8 md:p-10 bg-ink text-bone">
                <div className="font-mono text-[10px] uppercase tracking-widest text-bone/35 mb-8">
                  Or, drop a brief
                </div>

                {sent ? (
                  <div className="py-16 text-center">
                    <div className="font-display text-4xl italic mb-4">Got it.</div>
                    <p className="text-bone/55">I'll reply within 48 hours.</p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                    }}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <Field label="Name" name="name" placeholder="Your name" />
                      <Field
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                      />
                    </div>
                    <Select label="What are you reaching out about?" name="type" />
                    <Field
                      label="Budget range"
                      name="budget"
                      placeholder="$3k — $15k"
                    />
                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-widest text-bone/35 block mb-2">
                        Tell me about the project
                      </label>
                      <textarea
                        name="brief"
                        rows={4}
                        placeholder="What are you building? What's the timeline? What does success look like?"
                        className="w-full bg-transparent border-b border-bone/25 focus:border-ember py-2 outline-none resize-none text-bone placeholder:text-bone/25"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 bg-bone text-ink font-mono text-xs uppercase tracking-widest hover:bg-ember hover:text-bone transition-colors duration-200"
                    >
                      Send brief
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-widest text-bone/35 block mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="w-full bg-transparent border-b border-bone/25 focus:border-ember py-2 outline-none text-bone placeholder:text-bone/25"
      />
    </div>
  );
}

function Select({ label, name }: { label: string; name: string }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-widest text-bone/35 block mb-2">
        {label}
      </label>
      <select
        name={name}
        className="w-full bg-transparent border-b border-bone/25 focus:border-ember py-2 outline-none text-bone"
      >
        <option value="" className="text-ink">Choose one</option>
        <option value="forecasting" className="text-ink">Predictive Analytics / Forecasting</option>
        <option value="bi" className="text-ink">Data Pipeline / BI Dashboard</option>
        <option value="ml" className="text-ink">ML Model Development</option>
        <option value="mentorship" className="text-ink">Mentorship</option>
        <option value="freelance" className="text-ink">Freelance collaboration</option>
        <option value="other" className="text-ink">Something else</option>
      </select>
    </div>
  );
}
