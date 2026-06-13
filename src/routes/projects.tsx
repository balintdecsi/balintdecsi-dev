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
  topics?: string[];
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

      <Section number={2} title="Theses">
        <Theses />
      </Section>

      <Section number={3} title="Open source & experiments">
        <Repos />
      </Section>
    </article>
  );
}

const thesisNotes: Record<string, { title: string; blurb: string }> = {
  "ceu-public-thesis": {
    title: "MSc capstone — Budapest rental price prediction (ingatlan.com)",
    blurb:
      "Public-facing deliverables from my CEU Business Analytics capstone with ingatlan.com: a HUF/sqm rental price model for the listing-upload flow, validated with time-ordered CV (best 9.84% MdAPE). Repo contains the CEU ETD public summary (LaTeX, CC BY 4.0) and the ~21-slide client defence deck. Full pipeline, data, and technical report stay under NDA in the private capstone repo.",
  },
  THESIS: {
    title: "BSc thesis — Molecular Bionics (University of Szeged)",
    blurb:
      "Supplementary MATLAB source for my BSc Molecular Bionics thesis at the University of Szeged. The repo holds the analysis scripts that accompany the written thesis.",
  },
};

function Theses() {
  const { data } = useQuery({
    queryKey: ["repos", "balintdecsi"],
    queryFn: async () => {
      const res = await fetch(
        "https://api.github.com/users/balintdecsi/repos?per_page=100&sort=pushed"
      );
      if (!res.ok) throw new Error(`GitHub API ${res.status}`);
      return (await res.json()) as Repo[];
    },
    staleTime: 1000 * 60 * 30,
  });

  const order = ["ceu-public-thesis", "THESIS"];
  const items = order
    .map((name) => ({ note: thesisNotes[name], repo: data?.find((r) => r.name === name) }))
    .filter((x) => x.repo);

  if (!items.length) return null;

  return (
    <div className="space-y-7">
      {items.map(({ note, repo }) => (
        <div key={repo!.id}>
          <h3 className="text-xl mb-1">{note.title}</h3>
          <p className="mb-2">{note.blurb}</p>
          <p className="font-mono text-sm">
            <a href={repo!.html_url} target="_blank" rel="noopener noreferrer">
              github.com/balintdecsi/{repo!.name}
            </a>
          </p>
        </div>
      ))}
    </div>
  );
}

const TOPIC_GROUPS: { topic: string; title: string; description?: string }[] = [
  { topic: "foss", title: "Open-source contributions" },
  { topic: "side-project", title: "Side projects", description: "Personal builds and tools." },
  { topic: "hackathon", title: "Hackathons", description: "Weekend builds and competition entries." },
  { topic: "msc", title: "MSc coursework", description: "CEU MSc Business Analytics assignments and projects." },
  { topic: "bsc", title: "BSc coursework", description: "University of Szeged, Molecular Bionics." },
  { topic: "assignment", title: "Other assignments" },
];

const HIDDEN_REPOS = new Set(["THESIS", "ceu-public-thesis", "balintdecsi.github.io"]);

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
    .filter((r) => !r.fork && !r.archived && !HIDDEN_REPOS.has(r.name))
    .sort((a, b) => b.pushed_at.localeCompare(a.pushed_at));

  const used = new Set<number>();
  const groups = TOPIC_GROUPS.map((g) => {
    const inGroup = repos.filter((r) => !used.has(r.id) && r.topics?.includes(g.topic));
    inGroup.forEach((r) => used.add(r.id));
    return { ...g, repos: inGroup };
  }).filter((g) => g.repos.length);

  const other = repos.filter((r) => !used.has(r.id));
  if (other.length) {
    groups.push({ topic: "other", title: "Other", repos: other });
  }

  return (
    <div className="space-y-8">
      {groups.map((g) => (
        <div key={g.topic}>
          <h3 className="text-xl mb-1">{g.title}</h3>
          {g.description && (
            <p className="text-sm text-[color:var(--color-ink-muted)] italic mb-2">{g.description}</p>
          )}
          <ul className="divide-y divide-[color:var(--color-rule)]">
            {g.repos.map((r) => (
              <li key={r.id} className="py-3 flex items-baseline justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <a href={r.html_url} target="_blank" rel="noopener noreferrer" className="font-mono">
                    {r.name}
                  </a>
                  {r.description && (
                    <p className="text-sm text-[color:var(--color-ink-muted)] mt-0.5">{r.description}</p>
                  )}
                  {r.language && (
                    <p className="mt-1">
                      <BracketTag>{r.language.toLowerCase()}</BracketTag>
                    </p>
                  )}
                </div>
                {r.stargazers_count > 0 && (
                  <span className="font-mono text-xs text-[color:var(--color-ink-muted)] whitespace-nowrap">
                    ★ {r.stargazers_count}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}