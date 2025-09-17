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
    title: "Quantitative Developer",
    company: "RBC Capital Markets",
    org: "RAMPP — Risk Analytics, Modelling, Product & Pricing",
    when: "Sept 2025–Present",
    bullets: [
      "Develop Python/Java modules for pricing and risk analytics across structured rates and counterparty risk desks, improving model performance and scalability.",
      "Integrate quantitative models into production workflows to enhance accuracy of daily risk reporting.",
      "Collaborate with traders and quants to strengthen data pipelines and risk infrastructure.",
    ],
  },
  {
    title: "Electronic Trading Analyst",
    company: "TD Securities — Global Markets",
    when: "Jan–Apr 2025",
    bullets: [
      "Modernized 20+ legacy VBA scripts into scalable Python modules, cutting runtime by ~40%.",
      "Automated an interlisted dislocations report with Python visualizations to surface cross-market arbitrage opportunities.",
      "Built an end-to-end invoicing system (Python, VBA, SQL) that reduced manual errors and streamlined client trade billing.",
      "Reconciled and allocated thousands of daily trades, reducing settlement discrepancies and ensuring accurate price/volume/shape alignment across internal systems.",
    ],
  },
  {
    title: "Wealth Management Intern",
    company: "RBC Wealth Management",
    when: "Jun–Aug 2024",
    bullets: [
      "Built an equity-price forecasting prototype using LSTM (Python, sklearn), improving directional accuracy by ~12% vs baseline.",
      "Analyzed sector data in AI, cybersecurity, and LLMs with Pandas/NumPy; presented insights that informed thematic investment outlooks.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Curatu.ai",
    when: "Jan–Jun 2024",
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
          <section key={r.title + r.when} className="card p-6 md:p-8 relative">
            <div className="absolute right-6 top-6 text-sm text-[var(--muted)]">{r.when}</div>
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
