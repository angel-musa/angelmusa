// app/projects/page.tsx
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
  // Try main, then master
  const tries = [
    `https://raw.githubusercontent.com/${owner}/${repo}/main/README.md`,
    `https://raw.githubusercontent.com/${owner}/${repo}/master/README.md`,
  ];
  for (const url of tries) {
    const r = await fetch(url, { next: { revalidate: 3600 } });
    if (r.ok) {
      const md = await r.text();
      // first non-empty paragraph under ~600 chars
      const para =
        md.split(/\n{2,}/).map(s => s.trim()).find(p => p && !p.startsWith("#")) || null;
      return para && para.length <= 600 ? para : (para ? para.slice(0, 600) + "…" : null);
    }
  }
  return null;
}

function sortWithSprichFirst(list: RepoWithReadme[]) {
  return list.sort((a, b) => {
    const aS = a.name.toLowerCase().includes("sprich") ? -1 : 0;
    const bS = b.name.toLowerCase().includes("sprich") ? -1 : 0;
    if (aS !== bS) return aS - bS; // sprich first
    return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
  });
}

import ProjectsGrid from "../../components/ProjectsGrid";

export default async function ProjectsPage() {
  const repos = await getRepos();
  const cleaned = repos
    .filter(r => !r.name.startsWith("."))
    .slice(0, 24);

  // Pull brief readme snippets in parallel
  const withReadmes: RepoWithReadme[] = await Promise.all(
    cleaned.map(async r => ({
      ...r,
      readme: await getReadme("angel-musa", r.name),
    }))
  );

  const ordered = sortWithSprichFirst(withReadmes);

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Personal Projects</h1>
      <p className="text-[var(--muted)]">A curated set of builds at the intersection of software engineering and markets — trading tools,
  ML experiments, and clean UIs. Click a card for an overview and setup notes.</p>

      <ProjectsGrid repos={ordered} />
    </section>
  );
}
