// components/ProjectsGrid.tsx
"use client";

import { useState } from "react";
import { Github, X } from "lucide-react";
import Sparkline from "../components/Sparkline";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number; // not shown, but kept
  updated_at: string;
  readme?: string | null;
};

/* ---------- constants ---------- */
const WEBSITE_NAME = "angelmusa";

/* ---------- Display titles ---------- */
const titleMap: Record<string, string> = {
  sprich: "Sprich! AI-Powered German Speech Coach",
  "fortuna-2": "Fortuna — Personal Finance & Trading Platform",
  signalq: "SignalQ — FX Microstructure Toolkit",
  "time-series-forecasting": "Time-Series Forecasting Models",
  pairs_ml: "Pairs ML — Cointegration & Trading Strategy",
  [WEBSITE_NAME]: "Personal Website — Portfolio & Projects",
};

/* ---------- Short blurbs (overrides) ---------- */
const shortBlurbMap: Record<string, string> = {
  sprich: "Interactive coach for German pronunciation with speech recognition & scoring.",
  "fortuna-2": "Personal trading/analytics toolkit: dashboards, data, and backtesting.",
  signalq: "Tick-level FX research toolkit: event-time bars, microstructure features, and clean pipelines.",
  "time-series-forecasting": "Classic + ML models to predict time-series signals.",
  pairs_ml: "Cointegration-based pairs signals with ML-driven tweaks.",
  [WEBSITE_NAME]: "Next.js + Tailwind site showcasing projects, work, and contact.",
};

/* ---------- Tiny markdown → HTML so ** shows as bold in modal ---------- */
function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function basicMdToHtml(md: string) {
  let html = escapeHtml(md ?? "");
  html = html.replace(/(\*\*|__)(.+?)\1/gs, "<strong>$2</strong>");
  html = html.replace(/`([^`]+?)`/g, '<code class="px-1 rounded bg-black/5">$1</code>');
  html = html.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
    '<a class="underline hover:no-underline" href="$2" target="_blank" rel="noreferrer">$1</a>'
  );
  html = html.replace(/\n{2,}/g, "</p><p>").replace(/\n/g, "<br />");
  return `<p>${html}</p>`;
}

function toShortBlurb(text: string | null | undefined, max = 110) {
  const t = (text ?? "").replace(/\s+/g, " ").trim();
  if (!t) return "A project in progress. Click for details and setup notes.";
  return t.length <= max ? t : t.slice(0, max - 1) + "…";
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" });
  } catch {
    return iso;
  }
}

function displayLanguage(repoName: string, lang: string | null) {
  if (repoName === "signalq") return "Python, KDB+/q";
  return lang ?? "—";
}

/* ---------- Ordering rules ---------- */
const PIN_ORDER = ["sprich", "signalq", "fortuna-2", "pairs_ml", "time-series-forecasting"];

function sortRepos(repos: Repo[]) {
  return [...repos].sort((a, b) => {
    const aIsSite = a.name === WEBSITE_NAME;
    const bIsSite = b.name === WEBSITE_NAME;

    // website always last
    if (aIsSite && !bIsSite) return 1;
    if (!aIsSite && bIsSite) return -1;
    if (aIsSite && bIsSite) return 0;

    // pinned order first
    const ai = PIN_ORDER.indexOf(a.name);
    const bi = PIN_ORDER.indexOf(b.name);
    if (ai !== -1 && bi !== -1) return ai - bi;
    if (ai !== -1) return -1;
    if (bi !== -1) return 1;

    // fallback: newest updated first
    return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
  });
}

/* ---------- Sparklines (subtle trading vibe) ---------- */
const SPARK: Record<string, number[]> = {
  sprich: [1, 0.98, 1.04, 1.02, 1.08, 1.15, 1.12, 1.2],
  signalq: [1, 1.02, 1.03, 1.01, 1.05, 1.07, 1.06, 1.09],
  "fortuna-2": [1, 1.1, 0.95, 1.2, 1.18, 1.26, 1.22, 1.35],
  "time-series-forecasting": [1, 1.02, 1.01, 1.06, 1.04, 1.08, 1.12, 1.1],
  pairs_ml: [1, 0.92, 0.96, 1.0, 1.1, 1.05, 1.18, 1.15],
  [WEBSITE_NAME]: [1, 1.01, 1.02, 1.01, 1.03, 1.02, 1.04, 1.05],
};

export default function ProjectsGrid({ repos }: { repos: Repo[] }) {
  const [active, setActive] = useState<Repo | null>(null);

  // Ensure portfolio tile exists even if GitHub response missed it
  const hasSite = repos.some((r) => r.name === WEBSITE_NAME);
  const withSite = hasSite
    ? repos
    : [
        ...repos,
        {
          id: -1,
          name: WEBSITE_NAME,
          html_url: "https://github.com/angel-musa/angelmusa",
          description: "Next.js + Tailwind site showcasing projects, work, and contact.",
          language: "TypeScript",
          stargazers_count: 0,
          updated_at: new Date().toISOString(),
          readme: null,
        },
      ];

  const ordered = sortRepos(withSite);

  const overlayHtml = (readme?: string | null) => {
    if (!readme) return basicMdToHtml("README excerpt unavailable. Check the repo for full details + setup.");
    return basicMdToHtml(readme);
  };

  return (
    <>
      {/* Cards (gold editorial accents) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ordered.map((repo) => {
          const title = titleMap[repo.name] || repo.name.replace(/[-_]/g, " ");
          const blurb = shortBlurbMap[repo.name] || toShortBlurb(repo.description || repo.readme, 110);
          const spark = SPARK[repo.name];

          return (
            <button
              key={repo.id}
              onClick={() => setActive(repo)}
              className={[
                "paper glitter group relative p-8 text-left transition h-56 flex flex-col justify-between",
                "hover:-translate-y-[2px]",
                "focus:outline-none focus:ring-2 focus:ring-[rgba(var(--gold-rgb)/0.40)]",
                "hover:shadow-[0_20px_50px_rgba(0,0,0,0.14)]",
              ].join(" ")}
            >
              {/* subtle gold corner highlight */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition"
                style={{
                  background:
                    "radial-gradient(600px 220px at 18% 0%, rgba(var(--gold-rgb)/0.16), transparent 60%), radial-gradient(520px 200px at 82% 100%, rgba(var(--gold-rgb)/0.12), transparent 60%)",
                }}
              />

              {spark ? (
                <Sparkline
                  data={spark}
                  className="absolute right-3 top-3 w-28 h-7 opacity-55 group-hover:opacity-90 transition"
                  // use currentColor via tailwind text color:
                />
              ) : null}

              {/* set sparkline to gold via currentColor */}
              <div
                className="pointer-events-none absolute right-3 top-3 w-28 h-7 text-[rgba(var(--gold-rgb)/0.85)]"
                aria-hidden
              />

              <div className="relative">
                <div className="meta text-[10px] text-black/45">Project</div>
                <h3 className="mt-2 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-black/60 line-clamp-2">{blurb}</p>
              </div>

              <div className="relative mt-4 text-xs flex items-center justify-between text-black/55">
                <span className="meta tracking-[0.18em]">{displayLanguage(repo.name, repo.language)}</span>
                <span className="meta tracking-[0.18em]">Updated {formatDate(repo.updated_at)}</span>
              </div>

              {/* gold hairline at bottom */}
              <div
                className="pointer-events-none absolute left-6 right-6 bottom-5 h-px opacity-60"
                style={{ background: "linear-gradient(90deg, transparent, rgba(var(--gold-rgb)/0.65), transparent)" }}
              />
            </button>
          );
        })}
      </div>

      {/* Modal */}
      {active && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" onClick={() => setActive(null)} />

          <div className="relative paper glitter max-w-4xl w-full p-6 md:p-10">
            <button
              aria-label="Close"
              className="absolute top-3 right-3 p-2 rounded-full border border-black/10 hover:bg-black/5 transition"
              onClick={() => setActive(null)}
            >
              <X size={18} />
            </button>

            <div className="meta text-xs text-black/50">Project</div>
            <h3 className="display mt-2 text-3xl md:text-4xl leading-[1.0] pr-10">
              {titleMap[active.name] || active.name.replace(/[-_]/g, " ")}
            </h3>

            {active.description && active.name !== WEBSITE_NAME && (
              <div className="mt-3 text-sm text-black/60">{active.description}</div>
            )}

            <div className="mt-7 grid md:grid-cols-2 gap-4 text-sm">
              <div className="paper p-4">
                <div className="meta text-[10px] text-black/45">Language</div>
                <div className="mt-1">{displayLanguage(active.name, active.language)}</div>
              </div>
              <div className="paper p-4">
                <div className="meta text-[10px] text-black/45">Updated</div>
                <div className="mt-1">{formatDate(active.updated_at)}</div>
              </div>
            </div>

            <div className="mt-7">
              <h4 className="font-semibold">Overview</h4>
              <div
                className="mt-2 text-black/70 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: active.name === WEBSITE_NAME ? basicMdToHtml("what you're looking at right now :)") : overlayHtml(active.readme),
                }}
              />
            </div>

            <div className="mt-8 flex justify-end">
              <a href={active.html_url} target="_blank" rel="noreferrer" className="btn btn-gold">
                <Github size={18} /> Open on GitHub
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Make sparklines inherit gold */}
      <style jsx>{`
        :global(.group svg) {
          color: rgba(var(--gold-rgb) / 0.85);
        }
      `}</style>
    </>
  );
}
