import { Panel } from "./shared";

const MOODS = [
  { emoji: "😊", label: "Happy", count: 16, tone: "bg-gradient-success" },
  { emoji: "😌", label: "Calm", count: 6, tone: "bg-gradient-cool" },
  { emoji: "😐", label: "Meh", count: 4, tone: "bg-gradient-warm" },
  { emoji: "😔", label: "Down", count: 2, tone: "bg-destructive/25" },
];

export function MoodMonitor() {
  const total = MOODS.reduce((a, m) => a + m.count, 0);

  return (
    <Panel
      title="Class Mood"
      action={<span className="text-xs text-muted-foreground">Anonymous · weekly pulse</span>}
    >
      <div className="rounded-2xl bg-muted/40 p-4">
        <div className="flex items-baseline justify-between">
          <div className="text-sm text-muted-foreground">Class wellbeing</div>
          <div className="text-xs font-semibold text-success">+8% vs last week</div>
        </div>
        <div className="mt-3 flex h-3 w-full rounded-full overflow-hidden">
          {MOODS.map((m) => (
            <div
              key={m.label}
              className={m.tone}
              style={{ width: `${(m.count / total) * 100}%` }}
              title={`${m.label}: ${m.count}`}
            />
          ))}
        </div>
        <div className="mt-1 text-xs text-muted-foreground">{total} responses this week</div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {MOODS.map((m) => {
          const pct = Math.round((m.count / total) * 100);
          return (
            <div key={m.label} className={`rounded-2xl ${m.tone} p-3 text-center`}>
              <div className="text-2xl">{m.emoji}</div>
              <div className="mt-1 text-sm font-semibold">{m.label}</div>
              <div className="text-xs text-muted-foreground">{pct}% · {m.count}</div>
            </div>
          );
        })}
      </div>

      <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
        Individual responses stay anonymous. Reach out gently to the class if "Down" trends up.
      </p>
    </Panel>
  );
}
