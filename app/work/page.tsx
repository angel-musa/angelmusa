// app/work/page.tsx
"use client";

type Role = {
  title: string;
  company: string;
  org?: string;
  location?: string;
  when: string;
  bullets: string[];
};

const ROLES: Role[] = [
  {
    title: "Software Engineer",
    company: "RBC Capital Markets",
    org: "Risk Analytics Modelling Pricing & Processing (RAMPP)",
    location: "Toronto, ON",
    when: "Sep 2025 – Dec 2025",
    bullets: [
      "Built a real-time monitoring dashboard (Python, Django, REST APIs) to track the health of regression-testing servers supporting trader-facing pricing and risk systems across rates and credit desks.",
      "Designed a workflow-driven analytics tool to monitor regression test runs, surfacing reruns, execution-time distributions, and environment-level anomalies ahead of front-office releases.",
      "Improved infrastructure stability by reclaiming hundreds of GB of storage using a multithreaded Python utility to archive and clean historical regression outputs.",
    ],
  },
  {
    title: "Global Markets Analyst",
    company: "TD Securities",
    org: "Global Markets, Electronic Trading",
    location: "Toronto, ON",
    when: "Jan 2025 – Apr 2025",
    bullets: [
      "Automated daily P&L and revenue reporting by computing commissions and PFOF across equity and options flow, producing fiscal-year and month-by-month summaries using Python.",
      "Built an interlisted equity dislocation analysis pipeline by cleaning, FX-adjusting, and visualizing multi-venue pricing data to support trading strategy research.",
      "Developed a commission reconciliation system (Python, SQL, VBA) to compare expected client commissions against booked trades, identifying discrepancies in post-trade workflows.",
      "Reduced post-trade processing time by ~50% by automating trade allocation workflows and generating Fidessa-compatible templates from parsed client instructions.",
    ],
  },
  {
    title: "Software Developer",
    company: "RBC Wealth Management",
    location: "Toronto, ON",
    when: "Jun 2024 – Aug 2024",
    bullets: [
      "Trained a Python-based LSTM momentum model on multi-year equity price data to generate short-horizon directional signals used in internal trade idea discussions.",
      "Built sector-level analytics pipelines computing relative returns, volatility, and cross-sector correlations to support portfolio positioning decisions.",
      "Standardized Salesforce household structures and led internal training sessions to improve CRM data consistency across client coverage teams.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Curatu.ai",
    location: "Remote",
    when: "Jan 2024 – Jun 2024",
    bullets: [
      "Developed reusable, type-safe frontend components in TypeScript and React, improving maintainability and consistency across the application.",
      "Implemented skeleton loading states and layout containers to enhance perceived performance and user experience.",
      "Wrote unit and integration tests using Jest to ensure component reliability and prevent regressions.",
      "Containerized frontend services with Docker to streamline local development and ensure parity between development and production environments.",
    ],
  },
];

export default function WorkPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Work Experience</h1>
        <p className="text-[var(--muted)]">
          Experience across trading, analytics, and software engineering.
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
              {r.location ? <> • {r.location}</> : null}
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
