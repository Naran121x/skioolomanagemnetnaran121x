import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { GlassCard } from "@/components/data-primitives";
import { Switch } from "@/components/ui/switch";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [{ title: "Settings — Skoolio" }] }),
  component: SettingsPage,
});

function Row({ label, hint }: { label: string; hint: string }) {
  return (
    <div className="flex items-center justify-between border-t border-border py-4 first:border-t-0">
      <div>
        <div className="font-medium text-foreground">{label}</div>
        <div className="text-xs text-muted-foreground">{hint}</div>
      </div>
      <Switch defaultChecked />
    </div>
  );
}

function SettingsPage() {
  return (
    <PageShell title="Settings" subtitle="Workspace, notifications and privacy.">
      <div className="grid gap-4 lg:grid-cols-2">
        <GlassCard>
          <h3 className="font-display font-semibold text-foreground">Notifications</h3>
          <div className="mt-2">
            <Row label="Email digests" hint="Weekly summary every Friday" />
            <Row label="Push alerts" hint="Attendance and wellness flags" />
            <Row label="Parent updates" hint="Auto-translate to family language" />
          </div>
        </GlassCard>
        <GlassCard>
          <h3 className="font-display font-semibold text-foreground">Privacy</h3>
          <div className="mt-2">
            <Row label="Ghost mode" hint="Zero-knowledge proofs for sensitive data" />
            <Row label="Public profile" hint="Show in alumni directory" />
            <Row label="Analytics sharing" hint="Anonymous aggregate only" />
          </div>
        </GlassCard>
      </div>
    </PageShell>
  );
}
