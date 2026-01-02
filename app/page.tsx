// app/page.tsx
import Link from "next/link";
import FeaturedProjects from "../components/FeaturedProjects";
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-14">
      {/* MASTHEAD / COVER */}
      <section className="paper glitter p-10 md:p-12">
        <div className="meta text-xs text-black/55">
          Issue •{" "}
          {new Date().toLocaleString("en-CA", { month: "long", year: "numeric" })}
        </div>

        <h1 className="display mt-4 text-5xl md:text-7xl leading-[0.92]">
          Angel <span className="headline-underline">Musa</span>
        </h1>

        <p className="mt-6 max-w-2xl text-[15px] md:text-base text-black/60">
          Computer Engineering at Waterloo. Markets systems, software, and a life with taste.
        </p>

        {/* UPDATED ROUTES */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/industry" className="btn btn-gold">
            Industry <ArrowRight size={18} />
          </Link>
          <Link href="/editions" className="btn">
            Editions <ArrowRight size={18} />
          </Link>
          <Link href="/collective" className="btn">
            Collective <ArrowRight size={18} />
          </Link>
          <Link href="/thoughts" className="btn">
            Thoughts <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-10 rule" />

        <div className="mt-8 grid md:grid-cols-12 gap-6">
          <div className="md:col-span-4">
            <div className="meta text-[10px] text-black/50">Focus</div>
            <div className="mt-3 text-sm text-black/75">
              Trading tools • data pipelines • clean interfaces
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="meta text-[10px] text-black/50">Recent</div>
            <div className="mt-3 text-sm text-black/75">
              RBC Capital Markets • TD Securities • Curatu.ai
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="meta text-[10px] text-black/50">Now</div>
            <div className="mt-3 text-sm text-black/75">
              Shipping SignalQ + building the site into something personal.
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY FIRST */}
      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <div className="meta text-xs text-black/50">Section</div>
            <h2 className="display mt-2 text-3xl md:text-4xl">Industry</h2>
          </div>
          <Link href="/industry" className="navlink meta text-xs">
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
              className="paper p-7 hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition block"
            >
              <div className="meta text-[10px] text-black/45">Industry</div>
              <div className="mt-4 text-lg font-semibold">{x.t}</div>
              <div className="mt-2 text-sm text-black/60">{x.s}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* EDITIONS AFTER */}
      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <div className="meta text-xs text-black/50">Feature</div>
            <h2 className="display mt-2 text-3xl md:text-4xl">Editions</h2>
          </div>
          <Link href="/editions" className="navlink meta text-xs">
            View all
          </Link>
        </div>

        <div className="rule" />

        {/* FeaturedProjects can stay the same; it opens repo cards/modals */}
        <FeaturedProjects />
      </section>

      {/* CONTACT */}
      <section id="contact" className="paper glitter p-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <div className="meta text-xs text-black/50">Contact</div>
            <h2 className="display mt-2 text-4xl md:text-5xl">Say hello</h2>
            <p className="mt-4 text-black/60">Email is best. LinkedIn works too.</p>
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
  );
}
