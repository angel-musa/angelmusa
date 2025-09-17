type Role = {
  company: string;
  title: string;
  period: string;
  bullets: string[];
};

const roles: Role[] = [
  {
    company: "RBC Capital Markets — QTS (Quant Tech Services)",
    title: "QTS Developer (Co‑op)",
    period: "Sept–Dec 2025",
    bullets: [
      "Tested pricing/risk model updates against production baselines; automated anomaly surfacing.",
      "Built small tooling to compare distributions and flag outliers for model QA."
    ]
  },
  {
    company: "RBC Wealth Management",
    title: "Developer, Data & Analytics (Co‑op)",
    period: "Jun–Aug 2024",
    bullets: [
      "Built an equity forecasting prototype (Python, sklearn) to communicate model insights to non‑technical team.",
      "Improved reporting pipelines and created dashboards for stakeholders."
    ]
  },
  {
    company: "Curatu.ai",
    title: "Frontend Developer (Part‑time)",
    period: "Jan 2024–present",
    bullets: [
      "Shipped sleek, performant UI with React + Tailwind; improved UX flows and component library.",
    ]
  }
];

export default function WorkPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Work Experience</h1>
      <p className="text-[var(--muted)]">A snapshot of recent roles. Edit this page to add more detail or link to case studies.</p>
      <div className="space-y-4">
        {roles.map((r) => (
          <div key={r.company} className="card p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">{r.title}</h3>
                <p className="text-[var(--muted)]">{r.company}</p>
              </div>
              <span className="text-sm text-[var(--muted)]">{r.period}</span>
            </div>
            <ul className="mt-4 list-disc pl-6 space-y-2 text-[var(--muted)]">
              {r.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
