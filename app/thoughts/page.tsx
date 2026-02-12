// app/thoughts/page.tsx
"use client";

import Link from "next/link";

export default function ThoughtsPage() {
  return (
    <div className="space-y-12">
      {/* ===== HEADER ===== */}
      <header className="paper glitter p-8 md:p-10 relative overflow-hidden">
        {/* subtle shapes (keep your aesthetic, but silent) */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-[0.18]"
            style={{
              background:
                "radial-gradient(circle, rgba(var(--gold-rgb)/0.55), transparent 60%)",
            }}
          />
          <div
            className="absolute -left-20 top-10 h-40 w-40 rounded-[28px] rotate-12 opacity-[0.10]"
            style={{
              background: "linear-gradient(180deg, rgba(0,0,0,0.10), transparent)",
            }}
          />
          <div
            className="absolute right-10 bottom-10 h-32 w-32 rounded-[999px] opacity-[0.10]"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(0,0,0,0.18), transparent 60%)",
            }}
          />
        </div>

        <div className="relative">
          <div className="meta">Section</div>
          <h1 className="display mt-3 text-4xl md:text-6xl leading-[0.95]">
            The <span className="headline-underline">Thoughts</span>
          </h1>
          <p className="mt-5 max-w-3xl text-[15px] md:text-base text-black/70">
            Writing, notes, and references. This section is being built.
          </p>

          <div className="mt-8 rule" />

          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="btn" href="/industry">
              Industry
            </Link>
            <Link className="btn" href="/editions">
              Editions
            </Link>
            <Link className="btn" href="/collective">
              Collective
            </Link>
            <Link className="btn btn-gold" href="/thoughts">
              Thoughts
            </Link>
          </div>
        </div>
      </header>

      {/* ===== STATUS / WIP ===== */}
      <section className="grid md:grid-cols-12 gap-6 items-stretch">
        <div className="md:col-span-7 paper p-8 md:p-9">
          <div className="meta">Status</div>
          <h2 className="display mt-2 text-3xl md:text-4xl">In progress</h2>

          <div className="mt-6 rule" />

          <div className="mt-6 space-y-4 text-sm text-black/75 leading-relaxed">
            <p>
              I’m building a place for longer-form writing and working notes.
              The structure is live; the content is staged.
            </p>
            <p className="text-black/65">
              Topics will include markets, systems, language learning, and design
              constraints.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="meta text-[11px] px-2.5 py-1 rounded-full border border-black/10 bg-white/70">
              essays
            </span>
            <span className="meta text-[11px] px-2.5 py-1 rounded-full border border-black/10 bg-white/70">
              notes
            </span>
            <span className="meta text-[11px] px-2.5 py-1 rounded-full border border-black/10 bg-white/70">
              reading log
            </span>
            <span className="meta text-[11px] px-2.5 py-1 rounded-full border border-black/10 bg-white/70">
              references
            </span>
          </div>
        </div>

        <div className="md:col-span-5 paper glitter p-8 md:p-9 relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.22]"
            style={{
              background:
                "radial-gradient(720px 240px at 20% 0%, rgba(var(--gold-rgb)/0.16), transparent 60%), radial-gradient(520px 220px at 82% 100%, rgba(var(--gold-rgb)/0.10), transparent 60%)",
            }}
          />
          <div className="relative">
            <div className="meta">Next</div>
            <h2 className="display mt-2 text-3xl md:text-4xl">Planned modules</h2>

            <div className="mt-6 rule" />

            <ul className="mt-6 space-y-3 text-sm text-black/75">
              <li className="flex items-start gap-3">
                <span className="meta text-[11px] text-black/45 w-10">01</span>
                <span>Writing index with tags and archive.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="meta text-[11px] text-black/45 w-10">02</span>
                <span>Reading notes: reaction, question, connection.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="meta text-[11px] text-black/45 w-10">03</span>
                <span>Listening shelf (optional).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="meta text-[11px] text-black/45 w-10">04</span>
                <span>Monthly entries and references.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== PLACEHOLDER GRID (looks like content without cringe) ===== */}
      <section className="space-y-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="meta">Index</div>
            <h2 className="display mt-2 text-3xl md:text-4xl">Draft queue</h2>
          </div>
          <div className="meta text-black/55">not published</div>
        </div>

        <div className="rule" />

        <div className="grid md:grid-cols-12 gap-5">
          {/* lead placeholder */}
          <div className="md:col-span-7 paper glitter p-7 md:p-9 relative overflow-hidden">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.18]"
              style={{
                background:
                  "radial-gradient(820px 260px at 10% 0%, rgba(var(--gold-rgb)/0.18), transparent 60%)",
              }}
            />
            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <div className="meta">Lead draft</div>
                <div className="meta text-[11px] text-black/55">pending</div>
              </div>

              <div className="mt-5">
                <div className="inline-flex items-center gap-2">
                  <span className="meta text-[11px] px-2.5 py-1 rounded-full border border-black/10 bg-white/70">
                    Markets
                  </span>
                  <span className="meta text-[11px] text-black/55">2026</span>
                </div>

                <h3 className="mt-4 text-2xl md:text-3xl font-semibold leading-tight">
                  Working note: volatility, attention, and decision hygiene
                </h3>
                <p className="mt-3 text-[14px] md:text-[15px] text-black/65 leading-relaxed max-w-prose">
                  A draft on signal extraction, incentives, and what “discipline”
                  means in practice.
                </p>
              </div>
            </div>
          </div>

          {/* right column placeholders */}
          <div className="md:col-span-5 grid gap-5">
            {[
              { tag: "Fashion", title: "Constraint and silhouette", desc: "Notes on structure, tolerance, and reduction." },
              { tag: "Languages", title: "Language learning as iteration", desc: "Cadence, error correction, retention." },
              { tag: "Essays", title: "Taste, ambition, and selection", desc: "A draft about priorities and refusal." },
            ].map((x) => (
              <div key={x.title} className="paper p-7 relative overflow-hidden">
                <div className="flex items-center justify-between gap-4">
                  <span className="meta text-[11px] px-2.5 py-1 rounded-full border border-black/10 bg-white/70">
                    {x.tag}
                  </span>
                  <span className="meta text-[11px] text-black/55">draft</span>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-semibold leading-snug">{x.title}</h3>
                  <p className="mt-2 text-[13px] text-black/65 leading-relaxed">
                    {x.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOOTER NOTE ===== */}
      <section className="paper p-8 md:p-9">
        <div className="meta">Note</div>
        <p className="mt-4 text-sm text-black/75 leading-relaxed max-w-prose">
          This page is intentionally sparse until the writing is ready. If you’re
          looking for published work, check Editions.
        </p>
        <div className="mt-6 flex gap-3">
          <Link className="btn btn-gold" href="/editions">
            Browse Editions
          </Link>
          <Link className="btn" href="/industry">
            Go to Industry
          </Link>
        </div>
      </section>
    </div>
  );
}
