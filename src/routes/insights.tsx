import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Trophy, BookOpen, HeartPulse, Code2, Atom } from "lucide-react";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insight Stream — Skoolio" },
      { name: "description", content: "An AI-powered timeline of academic and behavioral journey." },
    ],
  }),
  component: InsightsPage,
});

const STREAM = [
  { icon: Atom, t: "Mastered Archimedes Principle", d: "Today · Physics", g: "bg-gradient-primary", tag: "Concept" },
  { icon: Code2, t: "Python Logic Unlocked", d: "Yesterday · Computer Science", g: "bg-gradient-cool", tag: "Skill" },
  { icon: HeartPulse, t: "Helped a peer through anxiety", d: "2 days ago · Wellness", g: "bg-gradient-warm", tag: "Care" },
  { icon: Trophy, t: "House points: +50 for teamwork", d: "3 days ago · Bluebell House", g: "bg-gradient-success", tag: "Award" },
  { icon: BookOpen, t: "Finished 'A Wrinkle in Time'", d: "5 days ago · Literature", g: "bg-gradient-primary", tag: "Reading" },
  { icon: Sparkles, t: "Curiosity badge — asked 12 questions", d: "1 week ago · Class participation", g: "bg-gradient-warm", tag: "Badge" },
];

function InsightsPage() {
  return (
    <PageShell title="Insight Stream" emoji="✨" subtitle="A living timeline of growth — generated with care.">
      <div className="relative pl-6">
        <div className="absolute left-2 top-2 bottom-2 w-px bg-border" />
        <div className="space-y-4">
          {STREAM.map((s, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-[18px] top-5 h-3 w-3 rounded-full bg-gradient-primary shadow-glow" />
              <Card className="rounded-3xl p-5 border-0 shadow-soft hover:shadow-glow transition-shadow">
                <div className="flex items-start gap-4">
                  <div className={`h-12 w-12 shrink-0 rounded-2xl ${s.g} text-primary-foreground flex items-center justify-center shadow-soft`}>
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <h3 className="font-display font-bold">{s.t}</h3>
                      <Badge variant="secondary" className="rounded-full">{s.tag}</Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
