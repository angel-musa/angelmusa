import Link from "next/link";
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="card p-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Hi, I’m Angel Musa.</h1>
        <p className="text-lg text-[var(--muted)] max-w-3xl">
          Quant-minded software developer and Waterloo engineering student.
          I build trading tools, ML systems, and sleek front-ends.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/projects" className="btn">Explore Projects <ArrowRight size={18}/></Link>
          <Link href="/work" className="btn bg-brand-700 hover:bg-brand-600">Work Experience</Link>
          <a href="#contact" className="btn bg-transparent border border-white/15 hover:bg-white/5">Contact me</a>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-2">What I do</h3>
          <p className="text-[var(--muted)]">Full‑stack apps, algorithmic trading research, and ML‑driven analytics.</p>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-2">Tech</h3>
          <p className="text-[var(--muted)]">Python, C++, TypeScript, Next.js, Tailwind, SQL, Pandas, scikit‑learn.</p>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-2">Currently</h3>
          <p className="text-[var(--muted)]">Building trading tools and prepping for quant/fintech internships.</p>
        </div>
      </section>

      <section id="contact" className="card p-8">
        <h2 className="text-2xl font-semibold mb-4">Contact me</h2>
        <p className="text-[var(--muted)] mb-6">The fastest way to reach me is email or LinkedIn.</p>
        <div className="flex flex-wrap gap-3">
          <a className="btn" href="mailto:angelmusa.work@gmail.com">
            <Mail size={18}/> Email
          </a>
          <a className="btn" href="https://github.com/angel-musa" target="_blank" rel="noreferrer">
            <Github size={18}/> GitHub
          </a>
          <a className="btn" href="https://www.linkedin.com/in/angel-musa" target="_blank" rel="noreferrer">
            <Linkedin size={18}/> LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
