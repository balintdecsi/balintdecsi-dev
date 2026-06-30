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