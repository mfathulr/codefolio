import Reveal from "./Reveal";

type Service = {
  code: string;
  title: string;
  description: string;
  includes: string[];
  starts: string;
  cta: string;
};

const services: Service[] = [
  {
    code: "S-01",
    title: "Predictive Analytics & Forecasting",
    description:
      "I build machine learning models to forecast demand, identify patterns, and support data-driven business planning.",
    includes: [
      "Demand / sales forecasting",
      "Classification & risk models",
      "Time series analysis",
      "Model evaluation & deployment",
    ],
    starts: "From $5k / project",
    cta: "Get a scoped proposal",
  },
  {
    code: "S-02",
    title: "Data Pipeline & BI Solutions",
    description:
      "End-to-end data solutions — from raw data extraction to interactive dashboards that make complex information actionable.",
    includes: [
      "ETL pipeline design",
      "Data modeling & warehousing",
      "Interactive BI dashboards",
      "SQL & reporting systems",
    ],
    starts: "From $3k / project",
    cta: "Discuss your data needs",
  },
  {
    code: "S-03",
    title: "Data Science Mentorship",
    description:
      "Practical, hands-on mentoring for aspiring data professionals. Focused on Python, SQL, statistics, and machine learning.",
    includes: [
      "Weekly async review sessions",
      "Portfolio & project feedback",
      "Career guidance & mock interviews",
      "Private community access",
    ],
    starts: "4 slots open",
    cta: "Apply for mentorship",
  },
];

const principles = [
  ["Scoped projects.", "Fixed scope, fixed price. No surprise billing."],
  ["Production-ready.", "Models that ship, not just notebooks."],
  ["Async-first.", "Looms, docs, Notion. Your timezone, your pace."],
  ["Hands-on mentoring.", "Practical skills, real feedback, portfolio-grade outcomes."],
];

export default function Services() {
  return (
    <section id="services" className="relative px-6 lg:px-10 py-24 md:py-36 border-t border-ink/10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="font-display text-5xl md:text-7xl tracking-tighter leading-[0.95] max-w-2xl">
            Three ways we can work together.
          </h2>
        </Reveal>

        {/* Services grid */}
        <div className="mt-16 grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-ink/20 border border-ink/20">
          {services.map((s, i) => (
            <Reveal key={s.code} delay={i * 0.08}>
              <div className="p-8 md:p-10 flex flex-col hover:bg-ember hover:text-bone transition-colors duration-250 group cursor-pointer">
                <div className="flex items-start justify-between mb-10">
                  <div className="font-mono text-3xl italic text-ink/25 group-hover:text-bone/30 transition-colors">
                    {s.code}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-ink/40 group-hover:text-bone/55 transition-colors">
                    {s.starts}
                  </div>
                </div>

                <h3 className="font-display text-3xl md:text-4xl tracking-tight leading-tight mb-4">
                  {s.title}
                </h3>
                <p className="text-ink/65 group-hover:text-bone/75 transition-colors mb-8 leading-relaxed">
                  {s.description}
                </p>

                <ul className="space-y-2 mb-10 flex-1">
                  {s.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm border-t border-ink/10 group-hover:border-bone/20 py-2.5 transition-colors"
                    >
                      <span className="text-ink/35 group-hover:text-bone/60 mt-0.5 transition-colors">
                        &#10003;
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="font-mono text-xs uppercase tracking-widest inline-flex items-center gap-2 group/btn"
                >
                  {s.cta}
                  <span className="transition-transform group-hover/btn:translate-x-1">
                    &#8594;
                  </span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Principles */}
        <Reveal delay={0.3}>
          <div className="mt-20 grid md:grid-cols-2 gap-12 items-start border-t border-ink/10 pt-12">
            <div>
              <h3 className="font-display text-4xl md:text-5xl tracking-tight leading-[0.95]">
                Real skills. Real outcomes. No fluff.
              </h3>
            </div>
            <ul className="space-y-4">
              {principles.map(([h, p]) => (
                <li
                  key={h}
                  className="grid grid-cols-[120px_1fr] gap-5 border-b border-ink/10 pb-4"
                >
                  <div className="font-mono text-xs uppercase tracking-widest text-ember">
                    {h}
                  </div>
                  <div className="text-ink/65">{p}</div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
