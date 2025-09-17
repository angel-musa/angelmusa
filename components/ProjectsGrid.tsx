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
  stargazers_count: number; // unused visually
  updated_at: string;
  readme?: string | null;   // optional: provided by parent
};

/* ---------- constants ---------- */
const WEBSITE_NAME = "angelmusa";

/* ---------- Display titles ---------- */
const titleMap: Record<string, string> = {
  sprich: "Sprich! AI-Powered German Speech Coach",
  "fortuna-2": "Fortuna — Personal Finance & Trading Platform",
  "time-series-forecasting": "Time-Series Forecasting Models",
  pairs_ml: "Pairs ML — Cointegration & Trading Strategy",
  [WEBSITE_NAME]: "Personal Website — Portfolio & Projects",
};

/* ---------- Short blurbs (overrides) ---------- */
const shortBlurbMap: Record<string, string> = {
  sprich: "Interactive coach for German pronunciation with speech recognition & scoring.",
  "fortuna-2": "Personal trading/analytics toolkit: dashboards, data, and backtesting.",
  "time-series-forecasting": "Classic + ML models to predict time-series signals.",
  pairs_ml: "Cointegration-based pairs signals with ML-driven tweaks.",
  [WEBSITE_NAME]: "Next.js + Tailwind site showcasing projects, work, and contact.",
};

/* ---------- Tiny markdown → HTML so ** shows as bold in modal ---------- */
function escapeHtml(s: string) {
  return (s ?? "")
    .replaceAll(/&/g, "&amp;")
    .replaceAll(/</g, "&lt;")
    .replaceAll(/>/g, "&gt;");
}
function basicMdToHtml(md?: string | null) {
  let html = escapeHtml(md ?? "");
  html = html.replace(/(\*\*|__)(.+?)\1/gs, "<strong>$2</strong>");
  html = html.replace(/`([^`]+?)`/g, '<code class="px-1 rounded bg-white/10">$1</code>');
  html = html.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
    '<a class="underline hover:no-underline" href="$2" target="_blank" rel="noreferrer">$1</a>'
  );
  html = html.replace(/\n{2,}/g, "</p><p>").replace(/\n/g, "<br />");
  return `<p>${html}</p>`;
}

/* ---------- Helpers ---------- */
function toShortBlurb(src: string | null | undefined, max = 110) {
  if (!src) return "";
  const cleaned = src
    .replace(/[*_`#>~\-]/g, "")
    .replace(/\[(.*?)\]\(.*?\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
  if (cleaned.length <= max) return cleaned;
  const cut = cleaned.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 60 ? cut.slice(0, lastSpace) : cut) + "…";
}

function formatDate(s: string) {
  return new Date(s).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/* language display override for the website tile */
function displayLanguage(repoName: string, fallback?: string | null) {
  if (repoName === WEBSITE_NAME) return "TypeScript · JavaScript · CSS";
  return fallback || "—";
}

/* overview override for the website tile */
function overviewHtmlFor(repoName: string, readme?: string | null) {
  if (repoName === WEBSITE_NAME) {
    return basicMdToHtml("what you're looking at right now :)");
  }
  return basicMdToHtml(
    readme ||
      "README excerpt unavailable. Check the repo for full details, setup, and screenshots."
  );
}

/* ---------- Ordering rules ---------- */
const PIN_ORDER = ["sprich", "fortuna-2", "pairs_ml", "time-series-forecasting"];

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

  return (
    <>
      {/* Cards with green glow + sparklines */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ordered.map((repo) => {
          const title = titleMap[repo.name] || repo.name.replace(/[-_]/g, " ");
          const blurb =
            shortBlurbMap[repo.name] ||
            toShortBlurb(repo.description || repo.readme, 110);
          const spark = SPARK[repo.name];

          return (
            <button
              key={repo.id}
              onClick={() => setActive(repo)}
              className="card relative p-8 text-left hover:scale-[1.01] transition h-56 flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-brand-300/40 hover:shadow-[0_0_24px_rgba(34,197,94,0.35)]"
            >
              {spark ? (
                <Sparkline
                  data={spark}
                  className="absolute right-3 top-3 w-28 h-7 text-emerald-400/70 opacity-60 group-hover:opacity-90 transition"
                />
              ) : null}

              <div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)] line-clamp-2">{blurb}</p>
              </div>
              <div className="mt-4 text-xs flex items-center justify-between text-[var(--muted)]">
                <span>{displayLanguage(repo.name, repo.language)}</span>
                <span>Updated {formatDate(repo.updated_at)}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Modal */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setActive(null)}
          />
          <div className="relative card max-w-4xl w-full p-6 md:p-10">
            <button
              aria-label="Close"
              className="absolute top-3 right-3 p-2 rounded-lg hover:bg-white/10"
              onClick={() => setActive(null)}
            >
              <X size={20} />
            </button>

            <h3 className="text-2xl font-semibold pr-10">
              {titleMap[active.name] || active.name.replace(/[-_]/g, " ")}
            </h3>

            {active.description && active.name !== WEBSITE_NAME && (
              <div
                className="mt-2 text-sm text-[var(--muted)]"
                dangerouslySetInnerHTML={{ __html: basicMdToHtml(active.description) }}
              />
            )}

            <div className="mt-6 grid md:grid-cols-2 gap-4 text-sm">
              <div className="card p-4">
                <div className="text-brand-200 text-xs">Language</div>
                <div>{displayLanguage(active.name, active.language)}</div>
              </div>
              <div className="card p-4">
                <div className="text-brand-200 text-xs">Updated</div>
                <div>{formatDate(active.updated_at)}</div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">Overview</h4>
              <div
                className="text-[var(--muted)] leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: overviewHtmlFor(active.name, active.readme),
                }}
              />
            </div>

            <div className="mt-8 flex justify-end">
              <a
                href={active.html_url}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                <Github size={18} /> Open on GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
