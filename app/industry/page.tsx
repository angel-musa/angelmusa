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
    <div className="space-y-10">
      {/* Vogue-style header */}
      <header className="paper glitter p-8 md:p-10">
        <div className="meta text-xs text-black/50">Portfolio • Work</div>
        <h1 className="display mt-3 text-4xl md:text-6xl leading-[0.95]">
          Work <span className="headline-underline">Experience</span>
        </h1>
        <p className="mt-5 max-w-3xl text-[15px] md:text-base text-black/60">
          Trading, analytics, and software engineering — with a bias for systems that ship cleanly.
        </p>

        <div className="mt-8 rule" />

        <div className="mt-6 flex flex-wrap gap-3">
          <a className="btn btn-gold" href="/projects">Projects</a>
          <a className="btn" href="/leadership">Leadership</a>
          <a className="btn" href="/interests">Interests</a>
        </div>
      </header>

      {/* Roles */}
      <section className="space-y-6">
        {/* <div className="flex items-end justify-between">
          <div>
            <div className="meta text-xs text-black/50">Section</div>
            <h2 className="display mt-2 text-2xl md:text-3xl">Roles</h2>
          </div>
        </div> */}
        <div className="rule" />

        <div className="grid grid-cols-1 gap-6">
          {ROLES.map((r) => (
            <section
              key={r.title + r.when}
              className={[
                "paper glitter group relative p-8 md:p-10 text-left transition",
                "hover:-translate-y-[2px]",
                "hover:shadow-[0_20px_50px_rgba(0,0,0,0.14)]",
                "focus:outline-none focus:ring-2 focus:ring-[rgba(var(--gold-rgb)/0.40)]",
              ].join(" ")}
            >
              {/* subtle gold corner highlight on hover */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition"
                style={{
                  background:
                    "radial-gradient(700px 260px at 18% 0%, rgba(var(--gold-rgb)/0.14), transparent 60%), radial-gradient(560px 220px at 82% 100%, rgba(var(--gold-rgb)/0.10), transparent 60%)",
                }}
              />

              <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <div className="meta text-[10px] text-black/45">Role</div>
                  <h3 className="mt-3 text-2xl font-semibold">{r.title}</h3>

                  <div className="mt-2 text-sm text-black/60">
                    <span className="font-medium text-black/80">{r.company}</span>
                    {r.org ? <span className="text-black/55"> — {r.org}</span> : null}
                    {r.location ? <span className="text-black/55"> • {r.location}</span> : null}
                  </div>
                </div>

                <div className="relative md:text-right">
                  <div className="meta text-[10px] text-black/45">Dates</div>
                  <div className="mt-3 text-sm text-black/70">{r.when}</div>
                </div>
              </div>

              <div className="relative mt-6 rule" />

              <ul className="relative mt-6 space-y-3">
                {r.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      className="mt-2 block h-1.5 w-1.5 rounded-full shrink-0"
                      style={{ background: "rgba(var(--gold-rgb)/0.95)" }}
                    />
                    <p className="text-[15px] leading-relaxed text-black/70">{b}</p>
                  </li>
                ))}
              </ul>

              {/* gold hairline at bottom */}
              <div
                className="pointer-events-none absolute left-8 right-8 bottom-6 h-px opacity-70"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(var(--gold-rgb)/0.70), transparent)",
                }}
              />
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}
