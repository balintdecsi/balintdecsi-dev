import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy URL — the CV now lives in the Experience section. */
export const Route = createFileRoute("/cv")({
  beforeLoad: () => {
    throw redirect({ to: "/experience", replace: true });
  },
});
