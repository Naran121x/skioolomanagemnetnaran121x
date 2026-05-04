import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/transport")({
  head: () => ({ meta: [{ title: "Transport — Skoolio" }] }),
  component: () => (
    <PageShell title="Transport" emoji="🚌" subtitle="Live school bus tracking">
      <Card className="rounded-3xl p-10 border-0 shadow-soft text-center text-muted-foreground">
        Bus 14 is on route — ETA 7 minutes.
      </Card>
    </PageShell>
  ),
});
