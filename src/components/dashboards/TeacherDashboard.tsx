import { CalendarCheck, BookOpen, HeartPulse, Users } from "lucide-react";
import { DashboardHero, StatCard, Panel } from "./shared";

export function TeacherDashboard() {
  const classes = [
    { name: "Grade 8 — Physics", present: 26, total: 28 },
    { name: "Grade 9 — Math", present: 22, total: 24 },
    { name: "Grade 10 — Python", present: 18, total: 20 },
  ];
  const moods = [
    { emoji: "😊", label: "Happy", count: 18, tone: "bg-gradient-success" },
    { emoji: "😌", label: "Calm", count: 6, tone: "bg-gradient-cool" },
    { emoji: "😐", label: "Meh", count: 3, tone: "bg-gradient-warm" },
    { emoji: "😟", label: "Worried", count: 1, tone: "bg-destructive/20" },
  ];

  return (
    <div className="space-y-6">
      <DashboardHero
        badge={<><span>🎓</span> Teacher studio</>}
        title={<>Freedom from <span className="text-gradient-primary">paperwork</span></>}
        subtitle="Attendance, mood, and lesson plans — all in one warm flow."
      />

      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Users} value="72" label="Students today" gradient="bg-gradient-cool" />
        <StatCard icon={CalendarCheck} value="94%" label="Attendance" gradient="bg-gradient-success" />
        <StatCard icon={BookOpen} value="3" label="Lessons planned" gradient="bg-gradient-primary" />
        <StatCard icon={HeartPulse} value="Good" label="Class mood" gradient="bg-gradient-warm" />
      </section>

      <section className="grid lg:grid-cols-3 gap-4">
        <Panel title="Class Attendance" className="lg:col-span-2">
          <ul className="space-y-3">
            {classes.map((c) => {
              const pct = Math.round((c.present / c.total) * 100);
              return (
                <li key={c.name} className="rounded-2xl bg-muted/50 p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold">{c.name}</span>
                    <span className="text-muted-foreground">{c.present}/{c.total}</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-background overflow-hidden">
                    <div className="h-full bg-gradient-primary" style={{ width: `${pct}%` }} />
                  </div>
                </li>
              );
            })}
          </ul>
        </Panel>

        <Panel title="Mood Tracker">
          <div className="grid grid-cols-2 gap-3">
            {moods.map((m) => (
              <div key={m.label} className={`rounded-2xl ${m.tone} p-3 text-center`}>
                <div className="text-2xl">{m.emoji}</div>
                <div className="mt-1 text-sm font-semibold">{m.label}</div>
                <div className="text-xs text-muted-foreground">{m.count} students</div>
              </div>
            ))}
          </div>
        </Panel>
      </section>

      <Panel
        title="Lesson Planner"
        action={<button className="rounded-xl bg-gradient-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 shadow-soft">+ New plan</button>}
      >
        <div className="grid md:grid-cols-3 gap-3">
          {[
            { day: "Mon", title: "Newton's 2nd Law", tag: "Physics" },
            { day: "Tue", title: "Quadratic equations", tag: "Math" },
            { day: "Wed", title: "Loops & functions", tag: "Python" },
          ].map((p) => (
            <div key={p.day} className="rounded-2xl border border-border p-4">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{p.day}</div>
              <div className="mt-1 font-semibold">{p.title}</div>
              <div className="mt-2 inline-flex rounded-full bg-accent/20 px-2 py-0.5 text-xs">{p.tag}</div>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}
