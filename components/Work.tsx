import { site } from "@/lib/site";
import Reveal from "./Reveal";

type Project = {
  index: string;
  title: string;
  client?: string;
  year: string;
  category: string;
  summary: string;
  impact: { metric: string; value: string }[];
  stack: string[];
  href?: string;
  size?: "lg" | "md" | "sm";
  image?: string;
};

const projects: Project[] = [
  {
    index: "01",
    title: "Demand Forecasting & Inventory Planning",
    client: "PT Trakindo Utama",
    year: "2025",
    category: "ML / Forecasting",
    summary:
      "Developing forecasting models and inventory planning solutions to support business decision-making. Built end-to-end pipeline from data ingestion to model deployment.",
    impact: [
      { metric: "Planning", value: "AI-driven" },
      { metric: "Focus", value: "Forecasting" },
      { metric: "Output", value: "Deployable" },
    ],
    stack: ["Python", "scikit-learn", "Time Series", "SQL", "Airflow"],
    href: "#contact",
    size: "lg",
    image: "https://picsum.photos/seed/demand-forecast/800/500",
  },
  {
    index: "02",
    title: "Food Recommendation System",
    client: "Portfolio Project",
    year: "2024",
    category: "ML / RecSys",
    summary:
      "Content-based and collaborative filtering recommendation system for food recommendations. Demonstrates end-to-end ML pipeline from data preprocessing to model evaluation.",
    impact: [
      { metric: "Approach", value: "Hybrid" },
      { metric: "Methods", value: "2" },
      { metric: "Focus", value: "Accuracy" },
    ],
    stack: ["Python", "scikit-learn", "Pandas", "NumPy", "Recommendation Systems"],
    size: "lg",
    image: "https://picsum.photos/seed/food-rec/800/500",
  },
  {
    index: "03",
    title: "Credit Scoring Model",
    client: "ID/X Partners — Virtual Internship",
    year: "2024",
    category: "ML / Classification",
    summary:
      "Classification model for credit risk evaluation. Built using machine learning techniques to assess borrower creditworthiness based on customer characteristics.",
    impact: [
      { metric: "Task", value: "Classification" },
      { metric: "Goal", value: "Risk evaluation" },
      { metric: "Method", value: "ML pipeline" },
    ],
    stack: ["Python", "scikit-learn", "Logistic Regression", "Decision Tree", "SQL"],
    size: "md",
    image: "https://picsum.photos/seed/credit-score/800/500",
  },
  {
    index: "04",
    title: "Digital User Churn Dashboard",
    client: "Bank Muamalat — Virtual Internship",
    year: "2024",
    category: "BI / Analytics",
    summary:
      "Interactive BI dashboard for analyzing and predicting digital user churn. Delivered actionable insights for customer retention strategy.",
    impact: [
      { metric: "Output", value: "Dashboard" },
      { metric: "Goal", value: "Retention" },
      { metric: "Insight", value: "Data-driven" },
    ],
    stack: ["SQL", "Metabase", "Data Visualization", "Business Analytics"],
    size: "md",
    image: "https://picsum.photos/seed/churn-dashboard/800/500",
  },
  {
    index: "05",
    title: "Traffic Light Optimization",
    client: "Portfolio Project",
    year: "2023",
    category: "Computer Vision",
    summary:
      "Computer vision and fuzzy logic system for vehicle counting and traffic light optimization. Real-time traffic management solution.",
    impact: [
      { metric: "Approach", value: "CV + Fuzzy Logic" },
      { metric: "Task", value: "Optimization" },
    ],
    stack: ["Computer Vision", "Fuzzy Logic", "Python", "OpenCV"],
    size: "sm",
    image: "https://picsum.photos/seed/traffic-light/800/500",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="relative px-6 lg:px-10 py-24 md:py-36 border-t border-ink/10 bg-ink text-bone"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-6">
          <div>
            <Reveal>
              <h2 className="font-display text-5xl md:text-7xl tracking-tighter leading-[0.95]">
                Projects that
                <br />
                <em className="italic">speak</em> for themselves.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <a
              href={site.socials.github}
              className="font-mono text-xs uppercase tracking-widest px-6 py-3 bg-bone text-ink hover:bg-ember hover:text-bone transition-colors duration-200 shrink-0"
            >
              View GitHub
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.index} delay={i * 0.06}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href || "#contact"}
      className="group relative block border border-bone/12 overflow-hidden hover:border-ember transition-colors duration-200 min-h-[340px] flex flex-col justify-between"
    >
      {/* Image header */}
      {project.image && (
        <div className="overflow-hidden h-48 relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/40 to-transparent" />
        </div>
      )}

      <div className="p-7 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-start justify-between mb-6">
            <div className="font-display text-4xl italic text-bone/30 group-hover:text-ember/70 transition-colors duration-200">
              {project.index}
            </div>
            <div className="text-right">
              <div className="font-mono text-[10px] uppercase tracking-widest text-bone/35">
                {project.year}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-ember mt-0.5">
                {project.category}
              </div>
            </div>
          </div>

          <h3 className="font-display text-2xl md:text-3xl tracking-tight leading-tight mb-3">
            {project.title}
          </h3>
          {project.client && (
            <div className="font-mono text-xs text-bone/35 mb-3">
              For {project.client}
            </div>
          )}
          <p className="text-bone/55 leading-relaxed text-sm">{project.summary}</p>
        </div>

        <div className="mt-5 space-y-4">
          <div className="grid grid-cols-3 gap-4 border-t border-bone/10 pt-4">
            {project.impact.map((m) => (
              <div key={m.metric}>
                <div className="font-display text-2xl text-ember">{m.value}</div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-bone/35 mt-0.5">
                  {m.metric}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 bg-bone/10"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}
