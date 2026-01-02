"use client";

import { useState } from "react";
import { Github, X } from "lucide-react";
import Sparkline from "../components/Sparkline";

/* markdown → HTML helper (unchanged) */
function escapeHtml(s: string) { return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
function basicMdToHtml(md: string) {
  let html = escapeHtml(md ?? "");
  html = html.replace(/(\*\*|__)(.+?)\1/gs, "<strong>$2</strong>");
  html = html.replace(/`([^`]+?)`/g, '<code class="px-1 rounded bg-white/10">$1</code>');
  html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,'<a class="underline hover:no-underline" href="$2" target="_blank" rel="noreferrer">$1</a>');
  html = html.replace(/\n{2,}/g,"</p><p>").replace(/\n/g,"<br />");
  return `<p>${html}</p>`;
}

type Featured = {
  key: "fortuna-2" | "sprich";
  display: string;
  url: string;
  language: string;
  updated: string;
  overview: string;
  packages?: string[];
};

const FEATURED: Featured[] = [
  {
    key: "fortuna-2",
    display: "Fortuna — Personal Finance & Trading Platform",
    url: "https://github.com/angel-musa/fortuna-2",
    language: "Python",
    updated: "Aug 2025",
    overview:
      "Personal trading & analytics toolkit: **Streamlit** dashboards, watchlists, indicators, and backtesting. Integrates live market data and custom visualizations to explore strategies quickly.",
    packages: ["streamlit","pandas","yfinance","pandas-ta","plotly","sqlite3"],
  },
  {
    key: "sprich",
    display: "Sprich! AI-Powered German Speech Coach",
    url: "https://github.com/angel-musa/sprich",
    language: "Python",
    updated: "Sep 3, 2025",
    overview:
      "Sprich! (German for *Speak!*) is an interactive web app that helps learners **practice German pronunciation**. It combines **speech recognition**, **acoustic similarity scoring**, and a custom **phoneme classifier** for the tricky *ich-Laut* (/ç/) vs *ach-Laut* (/x/).",
    packages: ["whisper/openai-whisper","librosa","praat-parselmouth","pydub","scikit-learn","numpy","fastapi","uvicorn"],
  },
];

// simple spark data per card
const SPARK: Record<Featured["key"], number[]> = {
  "fortuna-2": [1, 1.1, 0.95, 1.2, 1.18, 1.26, 1.22, 1.35],
  "sprich":    [1, 0.98, 1.04, 1.02, 1.08, 1.15, 1.12, 1.20],
};

export default function FeaturedProjects() {
  const [active, setActive] = useState<Featured | null>(null);

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Featured Projects</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {FEATURED.map((proj) => (
          <button
            key={proj.key}
            onClick={() => setActive(proj)}
            className="card relative p-6 group overflow-hidden hover:scale-[1.01] transition text-left hover:shadow-[0_0_24px_rgba(var(--gold-rgb)/0.28)]"
          >
            {/* subtle sparkline */}
            <Sparkline
              data={SPARK[proj.key]}
              className="absolute right-3 top-3 w-28 h-7 text-[rgba(var(--gold-rgb)/0.75)] opacity-60 group-hover:opacity-90 transition"
            />
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-[rgba(var(--gold-rgb)/0.10)] blur-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition" />

            <h3 className="text-xl font-semibold">{proj.display}</h3>

            <div
              className="mt-2 text-sm text-[var(--muted)] line-clamp-5"
              dangerouslySetInnerHTML={{ __html: basicMdToHtml(proj.overview) }}
            />
            <div className="mt-4 text-xs text-[var(--muted)] flex items-center justify-between">
              <span>{proj.language}</span>
              <span>Updated {proj.updated}</span>
            </div>
          </button>
        ))}
      </div>

      <div><a href="/projects" className="link">View all projects →</a></div>

      {/* modal unchanged except for consistent visuals */}
      {active && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setActive(null)} />
          <div className="relative card max-w-4xl w-full p-6 md:p-10">
            <button aria-label="Close" className="absolute top-3 right-3 p-2 rounded-lg hover:bg-white/10" onClick={() => setActive(null)}>
              <X size={20} />
            </button>

            <h3 className="text-2xl font-semibold pr-10">{active.display}</h3>

            <div className="mt-6 grid md:grid-cols-2 gap-4 text-sm">
              <div className="card p-4">
                <div className="meta text-[10px] text-black/50">Language</div>
                <div>{active.language}</div>
              </div>
              <div className="card p-4">
                <div className="meta text-[10px] text-black/50">Updated</div>
                <div>{active.updated}</div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">Overview</h4>
              <div
                className="text-[var(--muted)] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: basicMdToHtml(active.overview) }}
              />
            </div>

            {active.packages?.length ? (
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Packages used</h4>
                <div className="flex flex-wrap gap-2">
                  {active.packages.map((p) => (
                    <span key={p} className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="mt-8 flex justify-end">
              <a href={active.url} target="_blank" rel="noreferrer" className="btn">
                <Github size={18} /> Open on GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
