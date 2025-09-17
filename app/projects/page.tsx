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

async function getRepos(): Promise<Repo[]> {
  const res = await fetch(
    "https://api.github.com/users/angel-musa/repos?sort=updated&per_page=24",
    {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    }
  );
  if (!res.ok) {
    console.error("GitHub API error", res.status);
    return [];
  }
  const data = await res.json();
  return (data as Repo[]).filter((r) => !r.name.startsWith("."));
}

function formatDate(s: string) {
  return new Date(s).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function ProjectsPage() {
  const repos = await getRepos();
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Personal Projects</h1>
      <p className="text-[var(--muted)]">
        Auto-pulled from my GitHub. Click through for code and readmes.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="card p-5 hover:scale-[1.01] transition"
          >
            <h3 className="text-lg font-semibold">{repo.name}</h3>
            <p className="mt-1 text-sm text-[var(--muted)] line-clamp-3">
              {repo.description || "—"}
            </p>
            <div className="mt-4 text-xs flex items-center justify-between text-[var(--muted)]">
              <span>{repo.language || "—"}</span>
              <span>
                ★ {repo.stargazers_count} · Updated {formatDate(repo.updated_at)}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
