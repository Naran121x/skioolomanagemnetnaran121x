import { CalendarCheck, BookOpen, HeartPulse, Users, Atom, Code2, Play, FileText } from "lucide-react";
import { DashboardHero, StatCard, Panel } from "./shared";
import { LiveAttendance } from "./LiveAttendance";
import { MoodMonitor } from "./MoodMonitor";
import { AIReportCard } from "./AIReportCard";

const QUICK_LESSONS = [
  {
    subject: "Physics",
    icon: Atom,
    gradient: "bg-gradient-cool",
    next: "Newton's 2nd Law",
    period: "Period 3 · 11:20 AM",
    progress: 64,
    tags: ["Lab demo", "Worksheet", "Quiz"],
  },
  {
    subject: "Python",
    icon: Code2,
    gradient: "bg-gradient-primary",
    next: "Loops & functions",
    period: "Period 5 · 1:45 PM",
    progress: 42,
    tags: ["Live coding", "Notebook", "Homework"],
  },
];

export function TeacherDashboard() {
  return (
    <div className="space-y-6">
      <DashboardHero
        badge={<><span>🎓</span> Classroom Command Center</>}
        title={<>Your productivity <span className="text-gradient-primary">hub</span></>}
        subtitle="Smart attendance, anonymous mood pulses, and quick-launch lesson plans — paperwork stress, gone."
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

      <Panel
        title="Lesson Quick-Launch"
        action={<span className="text-xs text-muted-foreground">Today · jump straight in</span>}
      >
        <div className="grid md:grid-cols-2 gap-4">
          {QUICK_LESSONS.map((l) => {
            const Icon = l.icon;
            return (
              <div key={l.subject} className="rounded-2xl border border-border p-4 hover:shadow-soft transition-shadow">
                <div className="flex items-center gap-3">
                  <div className={`h-11 w-11 rounded-2xl ${l.gradient} text-primary-foreground flex items-center justify-center shadow-glow`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{l.subject}</div>
                    <div className="font-semibold">{l.next}</div>
                  </div>
                </div>
                <div className="mt-3 text-xs text-muted-foreground">{l.period}</div>
                <div className="mt-2 h-1.5 rounded-full bg-muted overflow-hidden">
                  <div className={`h-full ${l.gradient}`} style={{ width: `${l.progress}%` }} />
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {l.tags.map((t) => (
                    <span key={t} className="rounded-full bg-accent/20 px-2 py-0.5 text-xs">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex gap-2">
                  <button className={`flex-1 rounded-xl ${l.gradient} text-primary-foreground text-sm font-semibold py-2 inline-flex items-center justify-center gap-1.5 shadow-soft hover:scale-[1.02] active:scale-[0.98] transition-transform`}>
                    <Play className="h-4 w-4" /> Launch
                  </button>
                  <button className="rounded-xl border border-border text-sm font-semibold py-2 px-3 inline-flex items-center gap-1.5 hover:bg-accent/20 transition-colors">
                    <FileText className="h-4 w-4" /> Plan
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Panel>

      <AIReportCard />
    </div>
  );
}
