// app/leadership/page.tsx
export default function LeadershipPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Leadership & Community</h1>
        <p className="text-[var(--muted)]">
          Clubs, volunteering, and the things I build with people.
        </p>
      </header>

      <section className="space-y-5">
        <div className="card p-6 md:p-8">
          <div className="text-sm text-[var(--muted)]">University of Waterloo Data Science Club</div>
          <h3 className="text-xl font-semibold">VP Socials</h3>
          <div className="text-[var(--muted)]">Waterloo, ON • 2025 – Present</div>
          <ul className="mt-4 space-y-2">
            {[
              "Plan and run community events that make the club feel alive — logistics, promotion, and execution.",
              "Own the social content pipeline (ideas → drafts → schedule) and keep things consistent across platforms.",
              "Coordinate cross-team work for initiatives like CXC and recruiting cycles.",
            ].map((b, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-[rgba(var(--accent-rgb)/0.9)] shrink-0" />
                <p>{b}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="card p-6 md:p-8">
          <div className="text-sm text-[var(--muted)]">ECE Society</div>
          <h3 className="text-xl font-semibold">Volunteer</h3>
          <div className="text-[var(--muted)]">Waterloo, ON • (Add dates)</div>
          <ul className="mt-4 space-y-2">
            {[
              "Help run events and student programming for the ECE community.",
              "Support planning + on-the-day ops where needed.",
            ].map((b, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-[rgba(var(--accent-rgb)/0.9)] shrink-0" />
                <p>{b}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
