import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { GlassCard, StatCard } from "@/components/data-primitives";

export const Route = createFileRoute("/achievements")({
  head: () => ({ meta: [{ title: "Achievements — Skoolio" }] }),
  component: AchievementsPage,
});

const BADGES = [
  { name: "Curiosity", hint: "Asked 12+ thoughtful questions", earned: true },
  { name: "Streak Keeper", hint: "7-day attendance streak", earned: true },
  { name: "Helper", hint: "Helped 5 classmates this term", earned: true },
  { name: "Code Whisperer", hint: "Solved 10 Python problems", earned: false },
  { name: "Bookworm", hint: "Read 4 books this term", earned: true },
  { name: "Stage Star", hint: "Lead a class presentation", earned: false },
];

function AchievementsPage() {
  return (
    <PageShell title="Achievements" subtitle="Badges, streaks and house points.">
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard label="Badges earned" value="14" delta="+2" />
        <StatCard label="House points" value="1,820" hint="Bluebell" />
        <StatCard label="Current streak" value="7 days" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {BADGES.map((b) => (
          <GlassCard key={b.name} className={!b.earned ? "opacity-60" : ""}>
            <div className="flex items-start gap-3">
              <div className="h-12 w-12 rounded-xl border border-border bg-muted/60 flex items-center justify-center text-xl">
                {b.earned ? "🏆" : "🔒"}
              </div>
              <div>
                <div className="font-display font-semibold text-foreground">{b.name}</div>
                <div className="text-xs text-muted-foreground">{b.hint}</div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </PageShell>
  );
}
