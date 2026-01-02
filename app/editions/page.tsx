// app/projects/page.tsx

import Link from "next/link";
export const revalidate = 3600; // cache for 1h


type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
};

type RepoWithReadme = Repo & { readme?: string | null };

async function getRepos(): Promise<Repo[]> {
  const res = await fetch(
    "https://api.github.com/users/angel-musa/repos?sort=updated&per_page=24",
    { headers: { Accept: "application/vnd.github+json" }, next: { revalidate: 3600 } }
  );
  if (!res.ok) return [];
  return (await res.json()) as Repo[];
}

async function getReadme(owner: string, repo: string): Promise<string | null> {
  const tries = [
    `https://raw.githubusercontent.com/${owner}/${repo}/main/README.md`,
    `https://raw.githubusercontent.com/${owner}/${repo}/master/README.md`,
  ];
  for (const url of tries) {
    const r = await fetch(url, { next: { revalidate: 3600 } });
    if (r.ok) {
      const md = await r.text();
      const para =
        md.split(/\n{2,}/).map((s) => s.trim()).find((p) => p && !p.startsWith("#")) || null;
      return para && para.length <= 600 ? para : para ? para.slice(0, 600) + "…" : null;
    }
  }
  return null;
}

function sortWithFeaturedFirst(list: RepoWithReadme[]) {
  return list.sort((a, b) => {
    const aName = a.name.toLowerCase();
    const bName = b.name.toLowerCase();

    // Priority order: sprich -> signalq -> most recently updated
    const aRank = aName.includes("sprich") ? 0 : aName.includes("signalq") ? 1 : 2;
    const bRank = bName.includes("sprich") ? 0 : bName.includes("signalq") ? 1 : 2;

    if (aRank !== bRank) return aRank - bRank;
    return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
  });
}

import ProjectsGrid from "../../components/ProjectsGrid";

export default async function ProjectsPage() {
  const repos = await getRepos();

  const cleaned = repos.filter((r) => !r.name.startsWith(".")).slice(0, 24);

  const withReadmes: RepoWithReadme[] = await Promise.all(
    cleaned.map(async (r) => ({
      ...r,
      readme: await getReadme("angel-musa", r.name),
    }))
  );

  // --- Featured / Guaranteed card: SignalQ (FX Microstructure Toolkit) ---
  const SIGNALQ_NAME = "signalq";
  const hasSignalQAlready = withReadmes.some((r) => r.name.toLowerCase() === SIGNALQ_NAME);

  const featuredSignalQ: RepoWithReadme = {
    id: -1,
    name: "signalq",
    html_url: "https://github.com/angel-musa/signalq",
    description:
      "FX microstructure analytics toolkit (tick data, event-time sampling, market impact + feature engineering) built for systematic research.",
    language: "Python",
    stargazers_count: 0,
    updated_at: new Date().toISOString(),
    readme:
      (await getReadme("angel-musa", "signalq")) ??
      "Tick-level FX research toolkit: event-time bars, microstructure features, and clean pipelines for building + testing systematic signals.",
  };

  const merged: RepoWithReadme[] = hasSignalQAlready ? withReadmes : [featuredSignalQ, ...withReadmes];
  const ordered = sortWithFeaturedFirst(merged);

  return (
    <section className="space-y-8">
      {/* Vogue-style header */}
      {/* Editions-style header (matches Industry) */}
      <header className="paper glitter p-8 md:p-10">
        <div className="meta">Section</div>
        <h1 className="display mt-3 text-4xl md:text-6xl leading-[0.95]">
          The <span className="headline-underline">Editions</span>
        </h1>
        <p className="mt-5 max-w-3xl text-[15px] md:text-base text-black/70">
          Tools, experiments, and research projects — dashboards, backtests, and small systems collected as standalone pieces.
        </p>

        <div className="mt-8 rule" />

        {/* Top nav (same as Industry, routes to new structure) */}
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="btn" href="/industry">Industry</Link>
          <Link className="btn btn-gold" href="/editions">Editions</Link>
          <Link className="btn" href="/collective">Collective</Link>
          <Link className="btn" href="/thoughts">Thoughts</Link>

          {/* optional external link (kept from your old header) */}
          <a
            className="btn"
            href="https://github.com/angel-musa"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span aria-hidden>↗</span>
          </a>
        </div>
      </header>


      {/* subtle section label + divider (gold shows via underline + glitter) */}
      {/* <div className="flex items-end justify-between">
        <div>
          <div className="meta text-xs text-black/50">Section</div>
          <h2 className="display mt-2 text-2xl md:text-3xl">Selected repos</h2>
        </div>
      </div> */}
      <div className="rule" />

      <ProjectsGrid repos={ordered} />
    </section>
  );
}
