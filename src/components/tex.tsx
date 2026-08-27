import type { ReactNode } from "react";

/** Numbered LaTeX-style section heading with hairline rule. */
export function Section({
  number,
  title,
  children,
  id,
}: {
  number: number | string;
  title: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="mt-12 sm:mt-16">
      <h2 className="text-2xl mb-4 flex items-baseline gap-3 flex-wrap">
        <span className="font-mono text-base text-[color:var(--color-ink-muted)]">
          §{number}
        </span>
        <span>{title}</span>
      </h2>
      <hr className="tex-rule !mt-0 !mb-6" />
      {children}
    </section>
  );
}

/** Bracket-style tag, like [python] or [airflow]. */
export function BracketTag({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-xs text-[color:var(--color-ink-muted)] mr-2 inline-block">
      [{children}]
    </span>
  );
}

/** Terminal prompt with blinking caret. */
export function Prompt({
  children,
  caret = false,
}: {
  children?: ReactNode;
  caret?: boolean;
}) {
  return (
    <span className="font-mono">
      <span className="text-[color:var(--color-link)]">$ </span>
      {children}
      {caret && <span className="tex-caret" />}
    </span>
  );
}

/** Definition list pair. */
export function DT({ children }: { children: ReactNode }) {
  return (
    <dt className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-ink-muted)]">
      {children}
    </dt>
  );
}
export function DD({ children }: { children: ReactNode }) {
  return <dd className="mb-3">{children}</dd>;
}
/** Top-level page/section heading: <h1> on its own route, numbered <h2> on the one-pager. */
export function PageSection({
  id,
  standalone,
  number,
  title,
  subtitle,
  children,
}: {
  id: string;
  standalone?: boolean;
  number: number;
  title: string;
  subtitle?: ReactNode;
  children: ReactNode;
}) {
  if (standalone) {
    return (
      <section id={id} className="scroll-mt-8">
        <h1 className="text-3xl sm:text-4xl mt-2 mb-3">{title}</h1>
        {subtitle && <p className="text-[color:var(--color-ink-muted)] italic mb-2">{subtitle}</p>}
        {children}
      </section>
    );
  }
  return (
    <section id={id} className="scroll-mt-8 mt-16 sm:mt-24 pt-8 border-t-2 border-[color:var(--color-rule)]">
      <h2 className="text-3xl mt-2 mb-3 flex items-baseline gap-3 flex-wrap">
        <span className="font-mono text-base text-[color:var(--color-ink-muted)]">§{number}</span>
        <span>{title}</span>
      </h2>
      {subtitle && <p className="text-[color:var(--color-ink-muted)] italic mb-2">{subtitle}</p>}
      {children}
    </section>
  );
}

/** Numbering helper: "2.1" on the one-pager, "1" on a standalone route. */
export function subNumber(standalone: boolean | undefined, number: number, i: number) {
  return standalone ? String(i) : `${number}.${i}`;
}
