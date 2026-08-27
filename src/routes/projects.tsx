import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy URL — repositories now live under /code. */
export const Route = createFileRoute("/projects")({
  beforeLoad: () => {
    throw redirect({ to: "/code", replace: true });
  },
});
