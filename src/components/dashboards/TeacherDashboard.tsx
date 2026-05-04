import { CalendarCheck, BookOpen, HeartPulse, Users } from "lucide-react";
import { DashboardHero, StatCard, Panel } from "./shared";
import { LiveAttendance } from "./LiveAttendance";
import { MoodMonitor } from "./MoodMonitor";
import { AIReportCard } from "./AIReportCard";

export function TeacherDashboard() {
  return (
    <div className="space-y-6">
      <DashboardHero
        badge={<><span>🎓</span> Teacher studio</>}
        title={<>Freedom from <span className="text-gradient-primary">paperwork</span></>}
        subtitle="Smart attendance, anonymous mood pulses, and an AI report-card helper — all in one warm flow."
      />

      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Users} value="72" label="Students today" gradient="bg-gradient-cool" />
        <StatCard icon={CalendarCheck} value="94%" label="Attendance" gradient="bg-gradient-success" />
        <StatCard icon={BookOpen} value="3" label="Lessons planned" gradient="bg-gradient-primary" />
        <StatCard icon={HeartPulse} value="Good" label="Class mood" gradient="bg-gradient-warm" />
      </section>

      <section className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <LiveAttendance />
        </div>
        <MoodMonitor />
      </section>

      <AIReportCard />

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
