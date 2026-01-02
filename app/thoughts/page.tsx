// app/thoughts/page.tsx
import Link from "next/link";

export default function ThoughtsPage() {
  return (
    <div className="space-y-12">
      {/* Header (matches your editorial pages) */}
      <header className="paper glitter p-8 md:p-10 relative overflow-hidden">
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
        </div>

        <div className="relative">
          <div className="meta">Section</div>
          <h1 className="display mt-3 text-4xl md:text-6xl leading-[0.95]">
            The <span className="headline-underline">Thoughts</span>
          </h1>
          <p className="mt-5 max-w-3xl text-[15px] md:text-base text-black/70">
            Notes in progress — the writing room is being rearranged.
          </p>

          <div className="mt-8 rule" />

          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="btn" href="/industry">Industry</Link>
            <Link className="btn" href="/editions">Editions</Link>
            <Link className="btn" href="/collective">Collective</Link>
            <Link className="btn btn-gold" href="/thoughts">Thoughts</Link>
          </div>
        </div>
      </header>

      {/* Under construction body */}
      <section className="grid md:grid-cols-12 gap-6 items-stretch">
        {/* Left: notice */}
        <div className="md:col-span-7 paper p-8 md:p-10 relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.20]"
            style={{
              background:
                "radial-gradient(760px 260px at 12% 0%, rgba(var(--gold-rgb)/0.14), transparent 60%)",
            }}
          />
          <div className="relative">
            <div className="meta">Notice</div>
            <h2 className="display mt-2 text-3xl md:text-4xl leading-tight">
              Under construction
            </h2>
            <p className="mt-4 text-[15px] md:text-base text-black/70 leading-relaxed max-w-prose">
              This section is getting rebuilt into an editorial archive: writings, reading notes,
              albums, language logs, and monthly cultural indices. For now, the doors are open — just messy.
            </p>

            <div className="mt-7 rule" />

            <div className="mt-6 flex flex-wrap gap-3">
              <Link className="btn btn-gold" href="/editions">Browse Editions</Link>
              <Link className="btn" href="/industry">See Industry</Link>
              <Link className="btn" href="/collective">Collective</Link>
            </div>

            {/* little “stamp” */}
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2">
              <span className="meta text-[11px] text-black/55">Status</span>
              <span className="meta text-[11px] tracking-[0.35em] text-black/70">
                DRAFTING
              </span>
            </div>
          </div>
        </div>

        {/* Right: mini TOC / teaser */}
        <div className="md:col-span-5 paper glitter p-8 md:p-10 relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.28]"
            style={{
              background:
                "radial-gradient(560px 240px at 80% 10%, rgba(var(--gold-rgb)/0.16), transparent 60%)",
            }}
          />
          <div className="relative">
            <div className="meta">Coming soon</div>
            <h3 className="display mt-2 text-2xl md:text-3xl">What’s landing</h3>

            <div className="mt-6 rule" />

            <ol className="mt-6 space-y-4">
              {[
                { n: "01", t: "Writings", s: "markets, fashion, languages, essays" },
                { n: "02", t: "Reading, annotated", s: "reaction • question • connection" },
                { n: "03", t: "Album shelf", s: "clickable spines + top tracks" },
                { n: "04", t: "Monthly index", s: "recurring cultural favorites" },
              ].map((x) => (
                <li key={x.n} className="flex gap-4">
                  <div className="meta text-[11px] text-black/45 w-10 shrink-0">
                    {x.n}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{x.t}</div>
                    <div className="mt-1 text-[13px] text-black/65 leading-relaxed">
                      {x.s}
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <div
              className="mt-8 h-px w-full opacity-70"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(var(--gold-rgb)/0.55), transparent)",
              }}
            />

            <blockquote className="mt-8 pl-4 border-l border-black/10">
              <p className="text-[15px] italic text-black/60 leading-relaxed">
                “Elegance is not standing out, but being remembered.”
              </p>
              <footer className="mt-2 meta text-[11px] text-black/45">
                — Giorgio Armani
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}
