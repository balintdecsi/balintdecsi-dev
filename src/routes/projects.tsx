import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { BracketTag, Section } from "@/components/tex";
import { featured } from "@/content/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Bálint Décsi" },
      {
        name: "description",
        content:
          "Selected work: Proximata, mesh comic SaaS, Unibridge, CEU FeedForward, and open-source repos.",
      },
      { property: "og:title", content: "Projects — Bálint Décsi" },
      { property: "og:description", content: "Selected work and open-source experiments." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
  archived: boolean;
  pushed_at: string;
}

function Projects() {
  return (
    <article>
      <h1 className="text-4xl mt-2 mb-3">Projects</h1>
      <p className="text-[color:var(--color-ink-muted)] italic mb-2">
        Things I'm building, things I've shipped, things I've open-sourced.
      </p>

      <Section number={1} title="Featured">
        <div className="space-y-7">
          {featured.map((p) => (
            <div key={p.name}>
              <h3 className="text-xl mb-1">{p.name}</h3>
              <p className="mb-2">{p.blurb}</p>
              <p className="mb-1">
                {p.tags.map((t) => <BracketTag key={t}>{t.toLowerCase()}</BracketTag>)}
              </p>
              <p className="font-mono text-sm">
                {p.links.map((l, i) => (
                  <span key={l.href}>
                    {i > 0 && <span className="text-[color:var(--color-ink-muted)]"> · </span>}
                    <a
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {l.label}
                    </a>
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section number={2} title="Open source & experiments">
        <Repos />
      </Section>
    </article>
  );
}

function Repos() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["repos", "balintdecsi"],
    queryFn: async () => {
      const res = await fetch(
        "https://api.github.com/users/balintdecsi/repos?per_page=100&sort=pushed"
      );
      if (!res.ok) throw new Error(`GitHub API ${res.status}`);
      return (await res.json()) as Repo[];
    },
    staleTime: 1000 * 60 * 30,
    retry: 1,
  });

  if (isLoading) {
    return (
      <p className="font-mono text-sm text-[color:var(--color-ink-muted)]">
        loading repos…
      </p>
    );
  }
  if (error || !data) {
    return (
      <p className="font-mono text-sm text-[color:var(--color-ink-muted)]">
        Couldn't load repos. See{" "}
        <a href="https://github.com/balintdecsi" target="_blank" rel="noopener noreferrer">
          github.com/balintdecsi
        </a>.
      </p>
    );
  }

  const repos = data
    .filter((r) => !r.fork && !r.archived)
    .sort((a, b) => b.stargazers_count - a.stargazers_count || b.pushed_at.localeCompare(a.pushed_at))
    .slice(0, 12);

  return (
    <ul className="divide-y divide-[color:var(--color-rule)]">
      {repos.map((r) => (
        <li key={r.id} className="py-3 flex items-baseline justify-between gap-4">
          <div className="min-w-0 flex-1">
            <a href={r.html_url} target="_blank" rel="noopener noreferrer" className="font-mono">
              {r.name}
            </a>
            {r.description && (
              <p className="text-sm text-[color:var(--color-ink-muted)] mt-0.5">{r.description}</p>
            )}
          </div>
          <span className="font-mono text-xs text-[color:var(--color-ink-muted)] whitespace-nowrap">
            {r.language && <span className="mr-3">[{r.language.toLowerCase()}]</span>}
            ★ {r.stargazers_count}
          </span>
        </li>
      ))}
    </ul>
  );
}