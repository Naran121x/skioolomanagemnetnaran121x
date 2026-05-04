import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { StatCard, ChartPlaceholder, GlassCard } from "@/components/data-primitives";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export const Route = createFileRoute("/analytics")({
  head: () => ({ meta: [{ title: "Analytics — Skoolio" }] }),
  component: () => (
    <ProtectedRoute allow={["admin"]}>
      <AnalyticsPage />
    </ProtectedRoute>
  ),
});

function AnalyticsPage() {
  return (
    <PageShell title="Analytics" subtitle="School-wide performance and engagement signals.">
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard label="Active students" value="1,284" delta="+3.2%" />
        <StatCard label="Avg. attendance" value="94.6%" delta="+0.8%" />
        <StatCard label="At-risk flags" value="12" hint="AI early warning" />
        <StatCard label="Parent NPS" value="72" delta="+5" />
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <ChartPlaceholder title="Engagement trend" />
        <ChartPlaceholder title="Grade distribution" />
      </div>
      <GlassCard>
        <h3 className="font-display font-semibold text-foreground">Insights</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li>• Year 8 Physics scores are trending +6% above term average.</li>
          <li>• Wellness pulse improved across all houses last week.</li>
          <li>• 4 students flagged for early intervention — counselor notified.</li>
        </ul>
      </GlassCard>
    </PageShell>
  );
}
