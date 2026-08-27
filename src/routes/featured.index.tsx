import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy URL — featured work now lives under /work. */
export const Route = createFileRoute("/featured/")({
  beforeLoad: () => {
    throw redirect({ to: "/work", replace: true });
  },
});
