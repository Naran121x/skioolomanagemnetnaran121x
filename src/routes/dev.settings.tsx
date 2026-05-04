import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { GlassCard } from "@/components/data-primitives";
import { ROLES, useRole } from "@/context/RoleContext";
import { Check } from "lucide-react";

export const Route = createFileRoute("/dev/settings")({
  head: () => ({ meta: [{ title: "Dev Settings — Skoolio" }] }),
  component: () => (
    <ProtectedRoute allow={["admin"]}>
      <DevSettingsPage />
    </ProtectedRoute>
  ),
});

function DevSettingsPage() {
  const { role, setRole } = useRole();
  return (
    <PageShell title="System Settings" subtitle="Admin-only developer tools and role simulation.">
      <GlassCard>
        <div className="font-display font-semibold text-foreground">Role simulator</div>
        <p className="mt-1 text-sm text-muted-foreground">
          Preview how the app looks for each role. This switcher is hidden from non-admin users.
        </p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {ROLES.map((r) => (
            <button
              key={r.value}
              onClick={() => setRole(r.value)}
              className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-all ${
                role === r.value
                  ? "border-primary bg-primary/5 shadow-soft"
                  : "border-border bg-card hover:bg-accent/20"
              }`}
            >
              <span className={`h-9 w-9 rounded-lg ${r.gradient} flex items-center justify-center text-base`}>
                {r.emoji}
              </span>
              <div className="flex-1">
                <div className="text-sm font-semibold">{r.label}</div>
                <div className="text-xs text-muted-foreground">View as {r.label.toLowerCase()}</div>
              </div>
              {role === r.value && <Check className="h-4 w-4 text-primary" />}
            </button>
          ))}
        </div>
      </GlassCard>
    </PageShell>
  );
}
