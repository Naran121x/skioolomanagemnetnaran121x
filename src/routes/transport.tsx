import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Card } from "@/components/ui/card";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export const Route = createFileRoute("/transport")({
  head: () => ({
    meta: [
      { title: "Transport — Skoolio" },
      { name: "description", content: "Review the school transport workspace." },
      { property: "og:title", content: "Transport — Skoolio" },
      { property: "og:description", content: "Review the school transport workspace." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <ProtectedRoute allow={["admin", "parent"]}>
      <PageShell title="Transport" emoji="🚌" subtitle="Live school bus tracking">
        <Card className="rounded-3xl p-10 border-0 shadow-soft text-center text-muted-foreground">
          Bus 14 is on route — ETA 7 minutes.
        </Card>
      </PageShell>
    </ProtectedRoute>
  ),
});
