import { GraduationCap, Trophy, ClipboardList, Sparkles } from "lucide-react";
import { DashboardHero, StatCard, Panel } from "./shared";

export function StudentDashboard() {
  const skills = [
    { name: "Physics", level: 7, pct: 70, tone: "bg-gradient-cool" },
    { name: "Math", level: 6, pct: 55, tone: "bg-gradient-primary" },
    { name: "Python", level: 5, pct: 40, tone: "bg-gradient-warm" },
    { name: "English", level: 8, pct: 85, tone: "bg-gradient-success" },
  ];
  const badges = [
    { emoji: "🔥", name: "7-day streak" },
    { emoji: "🚀", name: "Quick learner" },
    { emoji: "🧠", name: "Top scorer" },
    { emoji: "🤝", name: "Team player" },
  ];
  const homework = [
    { subject: "Math", title: "Chapter 4 exercises", done: true },
    { subject: "Physics", title: "Lab report: pendulum", done: false },
    { subject: "Python", title: "Build a tic-tac-toe", done: false },
  ];

  return (
    <div className="space-y-6">
      <DashboardHero
        badge={<><span>🚀</span> Your space</>}
        title={<>Level up your <span className="text-gradient-primary">superpowers</span></>}
        subtitle="Your skills, badges and homework — own your learning journey."
      />

      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Sparkles} value="1,240" label="XP this week" gradient="bg-gradient-primary" />
        <StatCard icon={Trophy} value="12" label="Badges" gradient="bg-gradient-warm" />
        <StatCard icon={GraduationCap} value="6.5" label="Avg. skill level" gradient="bg-gradient-cool" />
        <StatCard icon={ClipboardList} value="2" label="Homework left" gradient="bg-gradient-success" />
      </section>

      <section className="grid lg:grid-cols-3 gap-4">
        <Panel title="My Skill Tree" className="lg:col-span-2">
          <div className="grid sm:grid-cols-2 gap-3">
            {skills.map((s) => (
              <div key={s.name} className="rounded-2xl border border-border p-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{s.name}</span>
                  <span className="text-xs rounded-full bg-muted px-2 py-0.5">Lv {s.level}</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-muted overflow-hidden">
                  <div className={`h-full ${s.tone}`} style={{ width: `${s.pct}%` }} />
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{s.pct}% to next level</div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Achievement Badges">
          <div className="grid grid-cols-2 gap-3">
            {badges.map((b) => (
              <div key={b.name} className="rounded-2xl bg-muted/50 p-4 text-center hover:shadow-glow transition-all">
                <div className="text-3xl">{b.emoji}</div>
                <div className="mt-1 text-xs font-semibold">{b.name}</div>
              </div>
            ))}
          </div>
        </Panel>
      </section>

      <Panel title="Homework Progress">
        <ul className="space-y-2">
          {homework.map((h) => (
            <li key={h.title} className="flex items-center gap-3 rounded-2xl bg-muted/50 p-3">
              <div className={`h-6 w-6 rounded-lg flex items-center justify-center text-xs ${h.done ? "bg-gradient-success text-primary-foreground" : "bg-background border border-border"}`}>
                {h.done ? "✓" : ""}
              </div>
              <div className="flex-1">
                <div className={`text-sm font-semibold ${h.done ? "line-through text-muted-foreground" : ""}`}>{h.title}</div>
                <div className="text-xs text-muted-foreground">{h.subject}</div>
              </div>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  );
}
