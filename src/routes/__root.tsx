import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <SiteShell>
      <div className="py-24">
        <pre className="font-mono text-sm text-[color:var(--color-ink-muted)] mb-6">
{`$ cd ${typeof window !== "undefined" ? window.location.pathname : "/?"}
bash: cd: No such file or directory`}
        </pre>
        <h1 className="text-3xl mb-3">404 — page not found</h1>
        <p className="text-[color:var(--color-ink-muted)] mb-6">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link to="/" className="font-mono text-sm">
          ← return to /
        </Link>
      </div>
    </SiteShell>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <SiteShell>
      <div className="py-24">
        <pre className="font-mono text-sm text-[color:var(--color-ink-muted)] mb-6">
{`$ ./load-page
error: unhandled exception`}
        </pre>
        <h1 className="text-3xl mb-3">Something broke</h1>
        <p className="text-[color:var(--color-ink-muted)] mb-6">
          {error.message || "Try reloading the page."}
        </p>
        <div className="flex gap-4 font-mono text-sm">
          <button onClick={() => { router.invalidate(); reset(); }} className="underline">
            ↻ retry
          </button>
          <a href="/">← home</a>
        </div>
      </div>
    </SiteShell>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Bálint Décsi — Data & ML Engineer" },
      { name: "description", content: "Data Engineer at Deutsche Telekom, CTO at Proximata, builder at mesh. End-to-end data and ML systems, AI agents, and SaaS prototyping." },
      { name: "author", content: "Bálint Décsi" },
      { property: "og:title", content: "Bálint Décsi — Data & ML Engineer" },
      { property: "og:description", content: "Data Engineer at Deutsche Telekom, CTO at Proximata, builder at mesh. End-to-end data and ML systems, AI agents, and SaaS prototyping." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "balintdecsi.dev" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Bálint Décsi — Data & ML Engineer" },
      { name: "twitter:description", content: "Data Engineer at Deutsche Telekom, CTO at Proximata, builder at mesh. End-to-end data and ML systems, AI agents, and SaaS prototyping." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/ca8a252d-a05b-4675-86df-bb00f41ff0ad" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/ca8a252d-a05b-4675-86df-bb00f41ff0ad" },
      { name: "google-site-verification", content: "L9BnYAn6zJgpejqKDDEy01dO0FAjhQwnTK1L-AISOvA" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" } as any,
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        children: `try {
          const theme = localStorage.getItem('theme');
          if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
          }
        } catch (e) {}`,
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Bálint Décsi",
          jobTitle: "CTO, Data Engineer",
          worksFor: [
            { "@type": "Organization", name: "Proximata", url: "https://proximata.io" },
            { "@type": "Organization", name: "Deutsche Telekom IT Solutions HU" },
          ],
          url: "https://balintdecsi.dev",
          sameAs: [
            "https://github.com/balintdecsi",
            "https://www.linkedin.com/in/balintdecsi4b6b53183",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteShell>
        <Outlet />
      </SiteShell>
    </QueryClientProvider>
  );
}

function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 w-full max-w-[72ch] mx-auto px-5 sm:px-6 pb-16 sm:pb-20">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  const linkCls = "font-mono text-sm no-underline hover:!text-[color:var(--color-link)]";
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="site-header no-print border-b border-[color:var(--color-rule)] mb-10 sm:mb-14">
      <div className="max-w-[72ch] mx-auto px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4">
        <Link to="/" className="font-mono text-sm no-underline tracking-tight shrink-0" onClick={() => setMenuOpen(false)}>
          <span className="text-[color:var(--color-link)]">~/</span>balint.decsi
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-5">
          <Link to="/" className={linkCls} activeProps={{ className: linkCls + " !text-[color:var(--color-link)] underline" }} activeOptions={{ exact: true }}>about</Link>
          <Link to="/cv" className={linkCls} activeProps={{ className: linkCls + " !text-[color:var(--color-link)] underline" }}>cv</Link>
          <Link to="/projects" className={linkCls} activeProps={{ className: linkCls + " !text-[color:var(--color-link)] underline" }}>projects</Link>
          <Link to="/tools" className={linkCls} activeProps={{ className: linkCls + " !text-[color:var(--color-link)] underline" }}>tools</Link>
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="font-mono text-sm p-1 -mr-1 no-underline hover:!text-[color:var(--color-link)] cursor-pointer bg-transparent border-0"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </nav>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 -mr-1 no-underline hover:!text-[color:var(--color-link)] cursor-pointer bg-transparent border-0"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="p-2 -mr-2 no-underline hover:!text-[color:var(--color-link)] cursor-pointer bg-transparent border-0"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav className="sm:hidden border-t border-[color:var(--color-rule)]">
          <div className="max-w-[72ch] mx-auto px-5 py-4 flex flex-col gap-3">
            <Link to="/" onClick={() => setMenuOpen(false)} className={linkCls} activeProps={{ className: linkCls + " !text-[color:var(--color-link)] underline" }} activeOptions={{ exact: true }}>about</Link>
            <Link to="/cv" onClick={() => setMenuOpen(false)} className={linkCls} activeProps={{ className: linkCls + " !text-[color:var(--color-link)] underline" }}>cv</Link>
            <Link to="/projects" onClick={() => setMenuOpen(false)} className={linkCls} activeProps={{ className: linkCls + " !text-[color:var(--color-link)] underline" }}>projects</Link>
            <Link to="/tools" onClick={() => setMenuOpen(false)} className={linkCls} activeProps={{ className: linkCls + " !text-[color:var(--color-link)] underline" }}>tools</Link>
          </div>
        </nav>
      )}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer no-print border-t border-[color:var(--color-rule)] mt-12">
      <div className="max-w-[72ch] mx-auto px-5 sm:px-6 py-6 font-mono text-xs text-[color:var(--color-ink-muted)] flex flex-wrap items-center justify-between gap-3">
        <span>© {new Date().getFullYear()} Bálint Décsi · typeset with care in Vienna &amp; Budapest</span>
        <span>
          <a href="https://github.com/balintdecsi" target="_blank" rel="noopener noreferrer" className="no-underline hover:underline">github</a>
          {" · "}
          <a href="https://www.linkedin.com/in/balintdecsi4b6b53183" target="_blank" rel="noopener noreferrer" className="no-underline hover:underline">linkedin</a>
        </span>
      </div>
    </footer>
  );
}
