import Image from "next/image";
import Reveal from "./Reveal";

const stack = {
  "ML & AI": ["PyTorch", "scikit-learn", "LangChain", "HuggingFace", "Time Series Forecasting"],
  "Data Engineering": ["Python", "SQL", "Airflow", "DBT", "PostgreSQL", "BigQuery"],
  "BI & Visualization": ["Metabase", "Tableau", "Looker", "Matplotlib", "Seaborn"],
  "Tools": ["Next.js", "FastAPI", "Git", "Linux", "Google Cloud"],
};

const experience = [
  {
    year: "2025 — Now",
    role: "Data Scientist",
    org: "PT Trakindo Utama",
    desc: "Demand forecasting, inventory planning, and AI-driven classification systems for business process optimization.",
  },
  {
    year: "2024 — 2025",
    role: "Junior Data Scientist",
    org: "Pacmann",
    desc: "Conversion funnel analysis, product dashboards, student performance analysis, and ML model development. Also taught and mentored 100+ students.",
  },
  {
    year: "2024",
    role: "Data Scientist — Virtual Internship",
    org: "ID/X Partners",
    desc: "Credit scoring model development for credit risk evaluation.",
  },
  {
    year: "2024",
    role: "BI Analyst — Virtual Internship",
    org: "Bank Muamalat",
    desc: "Digital user churn dashboard for customer retention analysis.",
  },
];

const recognition = [
  "GPA 3.72/4.00 — Mathematics, Universitas Diponegoro",
  "Teaching 100+ students in Data Science",
  "Mentoring 30+ aspiring data professionals",
  "Linear Algebra Teaching Assistant — Python-based",
];

export default function About() {
  return (
    <section id="about" className="relative px-6 lg:px-10 py-24 md:py-36 border-t border-ink/10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="font-display text-5xl md:text-7xl tracking-tighter leading-[0.95] max-w-4xl">
            Math background. Practical ML. Real results.
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mt-16 lg:mt-20">
          {/* Bio + image */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="grid sm:grid-cols-[200px_1fr] gap-6 mb-10 items-start">
                <div className="overflow-hidden">
                  <Image
                      src="/me.png"
                      alt="Fathul Radhiansyah"
                      width={200}
                      height={250}
                      className="w-full aspect-[4/5] object-cover"
                      loading="lazy"
                    />
                </div>
                <div className="space-y-5 text-lg md:text-xl leading-relaxed text-ink/75">
                  <p>
                    I'm Muhammad Fathul Radhiansyah, a Data Scientist with a background in Mathematics and a passion for solving real-world problems through data and technology.
                  </p>
                  <p>
                    My experience spans machine learning, demand forecasting, data engineering, and business intelligence. I enjoy working across the entire data lifecycle — from extracting and transforming raw data to building predictive models and delivering actionable insights through interactive applications.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-lg md:text-xl leading-relaxed text-ink/75">
                Currently working as a Data Scientist at PT Trakindo Utama, focusing on forecasting, inventory planning, and AI-driven business solutions. Beyond my professional work, I teach and mentor aspiring data professionals — helping them develop practical skills in Python, SQL, statistics, and machine learning.
              </p>
            </Reveal>

            {/* Recognition */}
            <Reveal delay={0.25}>
              <div className="mt-12">
                <div className="font-mono text-[10px] uppercase tracking-widest text-ink/40 mb-5">
                  Recognition
                </div>
                <ul className="space-y-3">
                  {recognition.map((r) => (
                    <li
                      key={r}
                      className="flex items-start gap-3 text-base md:text-lg border-b border-ink/10 pb-3"
                    >
                      <span className="text-ember mt-0.5">&#9658;</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Stack — right column */}
          <div className="lg:col-span-5 lg:border-l lg:border-ink/20 lg:pl-12">
            <Reveal delay={0.15}>
              <div className="mb-10">
                <div className="font-mono text-[10px] uppercase tracking-widest text-ink/40 mb-5">
                  Stack I move fast in
                </div>
                <div className="space-y-6">
                  {Object.entries(stack).map(([cat, items]) => (
                    <div key={cat}>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-ink/40 mb-2">
                        {cat}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {items.map((it) => (
                          <span
                            key={it}
                            className="font-mono text-xs px-2 py-1 bg-ink/5 hover:bg-ink hover:text-bone transition-colors duration-150"
                          >
                            {it}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Experience */}
            <Reveal delay={0.25}>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-ink/40 mb-5">
                  Path
                </div>
                <div className="border-t border-ink/20">
                  {experience.map((e) => (
                    <div
                      key={e.role}
                      className="grid grid-cols-[100px_1fr] gap-4 py-6 border-b border-ink/10 group"
                    >
                      <div className="font-mono text-xs uppercase tracking-widest text-ink/45 pt-0.5">
                        {e.year}
                      </div>
                      <div>
                        <div className="font-display text-xl md:text-2xl tracking-tight">
                          {e.role}
                        </div>
                        <div className="font-mono text-xs text-ink/45 mt-0.5">
                          {e.org}
                        </div>
                        <div className="text-ink/60 leading-relaxed mt-2 text-sm">
                          {e.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
