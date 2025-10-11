// app/work/page.tsx
"use client";

type Role = {
  title: string;
  company: string;
  org?: string;
  when: string;
  bullets: string[];
};

const ROLES: Role[] = [
  {
    title: "Software Developer",
    company: "RBC Capital Markets",
    org: "Risk Analytics — RAMPP (Risk Analytics, Modelling, Product & Pricing)",
    when: "Sept 2025 – Present",
    bullets: [
      "Developed a full-stack server-health monitoring dashboard (Python, Django, React, Node.js) to track test infrastructure and application uptime across 30+ internal servers.",
      "Built REST APIs for real-time system metrics and visual analytics, improving visibility into regression test performance and reducing incident resolution time by 35%.",
      "Containerized services using Docker and automated deployments via internal CI/CD pipelines to ensure stable production rollouts and simplified maintenance.",
    ],
  },
  {
    title: "Electronic Trading Analyst",
    company: "TD Securities — Global Markets",
    when: "Jan – Apr 2025",
    bullets: [
      "Re-engineered 20+ legacy VBA scripts into production-ready Python/C++ modules, cutting runtime by 40%.",
      "Conducted a quantitative research project on cross-listed equity dislocations, automating data collection and visualization to identify inefficiencies supporting future strategy development.",
      "Built a commission reconciliation and trade validation system (Python, SQL, VBA) to cross-check 5,000+ daily trades, reducing settlement discrepancies and ensuring accurate P&L attribution across internal systems.",
    ],
  },
  {
    title: "Software Developer",
    company: "RBC Wealth Management",
    when: "Jun – Aug 2024",
    bullets: [
      "Developed a Python-based LSTM model for equity direction forecasting using historical time-series data to generate predictive trading signals and trend classifications.",
      "Integrated the model into a full-stack stock visualization dashboard featuring secure login, watchlists, and real-time news sentiment analysis scraped via Selenium for contextual insights.",
      "Engineered automated data pipelines (Pandas, NumPy, SQL) to conduct sector-level quantitative research across AI, cybersecurity, and LLM industries.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Curatu.ai",
    when: "Jan – Jun 2024",
    bullets: [
      "Employed TypeScript to develop a robust and type-safe skeleton container for a webpage.",
      "Utilized Git for version control, committing changes for efficient review by the supervisor and team.",
      "Created unit and integration tests using testing libraries like Jest to ensure code reliability.",
      "Used Docker to containerize environments, ensuring seamless integration between development and production.",
    ],
  },
];

export default function WorkPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Work Experience</h1>
        <p className="text-[var(--muted)]">
          A snapshot of recent roles, drawn from my resume.
        </p>
      </header>

      <div className="space-y-5">
        {ROLES.map((r) => (
          <section
            key={r.title + r.when}
            className="card p-6 md:p-8 relative transition hover:scale-[1.01] hover:shadow-[0_0_24px_rgba(34,197,94,0.35)]"
          >
            <div className="absolute right-6 top-6 text-sm text-[var(--muted)]">
              {r.when}
            </div>
            <h3 className="text-xl font-semibold">{r.title}</h3>
            <div className="text-[var(--muted)]">
              {r.company}
              {r.org ? <> — {r.org}</> : null}
            </div>
            <ul className="mt-4 space-y-2">
              {r.bullets.map((b, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-brand-400 shrink-0" />
                  <p>{b}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
