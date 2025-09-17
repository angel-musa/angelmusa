import Link from "next/link";
import FeaturedProjects from "../components/FeaturedProjects";
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="card p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none parallax" />
        <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight font-[var(--font-sora)]">
          Hi, I’m <span className="headline-underline">Angel Musa</span>.
        </h1>
        <p className="text-lg text-[var(--muted)] max-w-3xl font-[var(--font-inter)]">
          I’m a third-year Computer Engineering student at the University of Waterloo. I’ve worked across
          wealth management technology, electronic trading, and quant model testing at RBC and TD, and I’m
          focused on the intersection of software engineering, finance, and capital markets—especially
          building tools for trading and analytics.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/projects" className="btn">
            Explore Projects <ArrowRight size={18} />
          </Link>
          <Link href="/work" className="btn bg-brand-700 hover:bg-brand-600">
            Work Experience
          </Link>
          <a href="#contact" className="btn bg-transparent border border-white/15 hover:bg-white/5">
            Contact me
          </a>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="grid sm:grid-cols-3 gap-4">
        {[
          { k: "Degree", v: "BASc Computer Engineering @ UWaterloo" },
          { k: "Focus", v: "Trading systems • Data & ML • Front-end UI" },
          { k: "Experience", v: "RBC Capital Markets, TD Global Markets, Curatu.ai" },
        ].map((s) => (
          <div key={s.k} className="card p-5">
            <div className="text-sm text-brand-200">{s.k}</div>
            <div className="text-base mt-1">{s.v}</div>
          </div>
        ))}
      </section>

      {/* FEATURED PROJECTS */}
      {/* Fortuna & Sprich auto-pulled from their READMEs */}
      {/* If a README isn't found, we fall back to repo description. */}
      {/* You can rename the repos in components/FeaturedProjects.tsx */}
      <FeaturedProjects />

      {/* CONTACT */}
      <section id="contact" className="card p-8">
        <h2 className="text-2xl font-semibold mb-4">Contact me</h2>
        <p className="text-[var(--muted)] mb-6">The fastest way to reach me is email or LinkedIn.</p>
        <div className="flex flex-wrap gap-3">
          <a className="btn" href="mailto:a2musa@uwaterloo.ca"><Mail size={18} /> Email</a>
          <a className="btn" href="https://github.com/angel-musa" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
          <a className="btn" href="https://www.linkedin.com/in/angel-musa" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
        </div>
      </section>
    </div>
  );
}
