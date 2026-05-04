import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { GlassCard, StatCard } from "@/components/data-primitives";
import { Progress } from "@/components/ui/progress";

export const Route = createFileRoute("/skills")({
  head: () => ({ meta: [{ title: "Skill Tree — Skoolio" }] }),
  component: SkillsPage,
});

const SKILLS = [
  { name: "Algebra", level: 88, mastered: true },
  { name: "Geometry", level: 72, mastered: false },
  { name: "Python Basics", level: 95, mastered: true },
  { name: "Mechanics", level: 64, mastered: false },
  { name: "Essay Writing", level: 81, mastered: true },
  { name: "Spanish A2", level: 48, mastered: false },
];

function SkillsPage() {
  return (
    <PageShell title="Skill Tree" subtitle="Subjects glow as they are mastered.">
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard label="Skills mastered" value="14" delta="+2" />
        <StatCard label="In progress" value="6" />
        <StatCard label="XP this week" value="1,240" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((s) => (
          <GlassCard key={s.name} className={s.mastered ? "ring-1 ring-primary/30" : ""}>
            <div className="flex items-center justify-between">
              <div className="font-display font-semibold text-foreground">{s.name}</div>
              <span className="text-xs text-muted-foreground">{s.level}%</span>
            </div>
            <Progress value={s.level} className="mt-3 h-2 rounded-full" />
            <div className="mt-2 text-xs text-muted-foreground">
              {s.mastered ? "Mastered ✦" : "Keep going"}
            </div>
          </GlassCard>
        ))}
      </div>
    </PageShell>
  );
}
