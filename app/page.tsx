// app/page.tsx
import Link from "next/link";
import FeaturedProjects from "../components/FeaturedProjects";
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";

export default function HomePage() {
  const issue = new Date().toLocaleString("en-CA", { month: "long", year: "numeric" });

  return (
    <div className="space-y-16">
      {/* ===== COVER: editorial hero ===== */}
      <section className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white">
        {/* SPINE (magazine binding) */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 md:w-12 border-r border-black/10">
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ writingMode: "vertical-rl", transform: "translate(-50%, -50%) rotate(180deg)" }}
          >
            <div className="meta text-[10px] md:text-[11px] text-black/60 tracking-[0.35em]">
              ANGEL MUSA • PORTFOLIO • {issue.toUpperCase()}
            </div>
          </div>

          <div
            className="absolute left-0 top-0 h-full w-full opacity-60"
            style={{
              background:
                "linear-gradient(to bottom, rgba(var(--gold-rgb)/0.00), rgba(var(--gold-rgb)/0.22), rgba(var(--gold-rgb)/0.00))",
            }}
          />
        </div>

        {/* background “glitter” graphic */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.86]"
            style={{
              background:
                "radial-gradient(900px 520px at 12% 10%, rgba(var(--gold-rgb)/0.22), transparent 60%)," +
                "radial-gradient(720px 520px at 88% 22%, rgba(var(--gold-rgb)/0.16), transparent 62%)," +
                "radial-gradient(800px 560px at 60% 100%, rgba(0,0,0,0.06), transparent 62%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
              maskImage: "radial-gradient(ellipse at 45% 18%, black 42%, transparent 75%)",
            }}
          />
          <svg
            className="absolute -right-16 -top-10 opacity-[0.22]"
            width="620"
            height="520"
            viewBox="0 0 620 520"
            fill="none"
            aria-hidden
          >
            <path
              d="M530 60C448 58 426 142 365 189C303 237 210 214 163 271C114 330 158 418 238 452C318 486 420 447 474 381C528 315 612 214 590 136C574 82 556 62 530 60Z"
              fill="black"
            />
            <path
              d="M506 78C438 76 420 146 368 186C316 226 238 206 198 254C156 303 190 372 254 399C318 426 400 392 444 343C488 294 558 214 540 152C528 110 526 80 506 78Z"
              fill="rgba(200,164,75,0.65)"
            />
          </svg>
        </div>

        <div className="relative p-10 md:p-14 pl-14 md:pl-16">
          {/* top line */}
          <div className="flex items-center justify-between gap-6">
            <div className="meta">Issue • {issue}</div>
            <div className="meta hidden md:block">Waterloo • Toronto</div>
          </div>

          {/* masthead */}
          <div className="mt-8 md:mt-10">
            <h1 className="display text-5xl md:text-7xl leading-[0.88] tracking-[0.06em] uppercase">
              Angel <span className="headline-underline">Musa</span>
            </h1>

            <div className="meta mt-5">Editor’s Note</div>
            <p className="mt-3 max-w-2xl text-[15px] md:text-base text-black/70">
          An editorial record of markets and software.
            </p>
          </div>

          {/* editorial “cover lines” */}
          <div className="mt-10 grid md:grid-cols-12 gap-8">
            {/* left cover lines */}
            <div className="md:col-span-5 space-y-4">
              <div className="paper p-6">
                <div className="meta">Cover story</div>
                <div className="mt-3 text-lg font-semibold">
                  A personal index of craft, collaboration, and curiosity
                </div>
                <div className="mt-2 text-sm text-black/70">
                  Markets • Software • Design
                </div>
              </div>

              <div className="paper p-6">
                <div className="meta">Inside</div>
                <div className="mt-3 text-sm text-black/75">
                  Selected work, collaborations, and writing.
                </div>
              </div>
            </div>

            {/* right: browse box (centered buttons only) */}
            <div className="md:col-span-7 flex md:justify-end">
              <div className="w-full md:w-[420px] paper glitter p-7 md:p-8">
                <div className="meta text-center">Browse</div>

                <div className="mt-6 grid grid-cols-2 gap-3 place-items-stretch">
                  <Link href="/industry" className="btn btn-gold justify-center">
                    Industry <ArrowRight size={18} />
                  </Link>
                  <Link href="/editions" className="btn justify-center">
                    Editions <ArrowRight size={18} />
                  </Link>
                  <Link href="/collective" className="btn justify-center">
                    Collective <ArrowRight size={18} />
                  </Link>
                  <Link href="/thoughts" className="btn justify-center">
                    Thoughts <ArrowRight size={18} />
                  </Link>
                </div>

                {/* optional: subtle centered hairline for polish */}
                <div
                  className="mt-7 h-px w-full opacity-70"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(var(--gold-rgb)/0.55), transparent)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* scroll cue */}
          <div className="mt-10 flex justify-center">
            <a
              href="#below"
              className="meta inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 hover:border-black/20 transition"
            >
              Scroll <span aria-hidden className="text-black/70">↓</span>
            </a>
          </div>
        </div>

        {/* TABLE OF CONTENTS STRIP */}
        <div className="relative border-t border-black/10 bg-white/70 backdrop-blur">
          <div className="px-6 md:px-10 py-3 flex flex-wrap items-center justify-between gap-3">
            <div className="meta text-[11px] text-black/60">Contents</div>

            <div className="flex flex-wrap items-center gap-4 text-sm">
              <Link className="navlink meta text-[11px]" href="/industry">
                01 Industry
              </Link>
              <span className="meta text-[10px] text-black/35">•</span>
              <Link className="navlink meta text-[11px]" href="/editions">
                02 Editions
              </Link>
              <span className="meta text-[10px] text-black/35">•</span>
              <Link className="navlink meta text-[11px]" href="/collective">
                03 Collective
              </Link>
              <span className="meta text-[10px] text-black/35">•</span>
              <Link className="navlink meta text-[11px]" href="/thoughts">
                04 Thoughts
              </Link>
              <span className="meta text-[10px] text-black/35">•</span>
              <Link className="navlink meta text-[11px]" href="/#contact">
                05 Contact
              </Link>
            </div>

            <div
              className="h-px w-full opacity-70"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(var(--gold-rgb)/0.55), transparent)",
              }}
            />
          </div>
        </div>
      </section>

      {/* ===== BELOW THE FOLD: editorial spread ===== */}
      <div id="below" className="space-y-14">
        {/* editorial two-column intro */}
        <section className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <div className="meta">Editor’s note</div>
            <h2 className="display mt-3 text-3xl md:text-4xl leading-tight">
              I like precision.
            </h2>
            <p className="mt-4 text-black/70 text-[15px] leading-relaxed">
              In markets, that means signal, structure, and speed. Outside it, taste and restraint.
              This site is a small archive of both.
            </p>
          </div>

          <div className="md:col-span-8">
            <div className="paper glitter p-8 md:p-10">
              <div className="meta">Pull quote</div>
              <p className="display mt-4 text-2xl md:text-3xl leading-snug">
                “Build like an engineer, edit like a magazine.”
              </p>
              <div className="mt-6 rule" />
              <div className="mt-6 grid md:grid-cols-3 gap-6">
                <div>
                  <div className="meta">Industry</div>
                  <div className="mt-2 text-sm text-black/80">Trading + infra</div>
                </div>
                <div>
                  <div className="meta">Editions</div>
                  <div className="mt-2 text-sm text-black/80">Tools + research</div>
                </div>
                <div>
                  <div className="meta">Collective</div>
                  <div className="mt-2 text-sm text-black/80">Clubs + collabs</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== INDUSTRY PREVIEW ===== */}
        <section className="space-y-6">
          <div className="flex items-end justify-between">
            <div>
              <div className="meta">Section</div>
              <h2 className="display mt-2 text-3xl md:text-4xl">Industry</h2>
            </div>
            <Link href="/industry" className="navlink meta">
              View all
            </Link>
          </div>

          <div className="rule" />

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { t: "RBC Capital Markets", s: "Risk analytics + model testing infrastructure" },
              { t: "TD Securities", s: "Electronic trading analytics + automation" },
              { t: "RBC Wealth Management", s: "Signal research + data pipelines" },
            ].map((x) => (
              <Link
                key={x.t}
                href="/industry"
                className={[
                  "paper glitter group relative p-7 transition block",
                  "hover:-translate-y-[2px]",
                  "hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)]",
                  "focus:outline-none focus:ring-2 focus:ring-[rgba(var(--gold-rgb)/0.40)]",
                ].join(" ")}
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition"
                  style={{
                    background:
                      "radial-gradient(700px 240px at 18% 0%, rgba(var(--gold-rgb)/0.14), transparent 60%), radial-gradient(520px 200px at 82% 100%, rgba(var(--gold-rgb)/0.10), transparent 60%)",
                  }}
                />
                <div className="relative meta">Industry</div>
                <div className="relative mt-4 text-lg font-semibold">{x.t}</div>
                <div className="relative mt-2 text-sm text-black/70">{x.s}</div>
                <div
                  className="pointer-events-none absolute left-7 right-7 bottom-6 h-px opacity-70"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(var(--gold-rgb)/0.70), transparent)",
                  }}
                />
              </Link>
            ))}
          </div>
        </section>

        {/* ===== EDITIONS PREVIEW ===== */}
        <section className="space-y-6">
          <div className="flex items-end justify-between">
            <div>
              <div className="meta">Feature</div>
              <h2 className="display mt-2 text-3xl md:text-4xl">Editions</h2>
            </div>
            <Link href="/editions" className="navlink meta">
              View all
            </Link>
          </div>

          <div className="rule" />
          <FeaturedProjects />
        </section>

        {/* ===== CONTACT ===== */}
        <section id="contact" className="paper glitter p-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <div className="meta">Contact</div>
              <h2 className="display mt-2 text-4xl md:text-5xl">Say hello</h2>
              <p className="mt-4 text-black/70">Email is best. LinkedIn works too.</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a className="btn btn-gold" href="mailto:a2musa@uwaterloo.ca">
                <Mail size={18} /> Email
              </a>
              <a className="btn" href="https://github.com/angel-musa" target="_blank" rel="noreferrer">
                <Github size={18} /> GitHub
              </a>
              <a className="btn" href="https://www.linkedin.com/in/angel-musa" target="_blank" rel="noreferrer">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
