import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Sparkles, Copy, Check, Loader2 } from "lucide-react";
import { Panel } from "./shared";
import { generateReportCard } from "@/server/ai.functions";

export function AIReportCard() {
  const generate = useServerFn(generateReportCard);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [bullets, setBullets] = useState("");
  const [summary, setSummary] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    setError(null);
    setSummary("");
    if (!name.trim() || bullets.trim().length < 5) {
      setError("Add a student name and a few bullet points first.");
      return;
    }
    setLoading(true);
    try {
      const res = await generate({ data: { studentName: name.trim(), bullets: bullets.trim() } });
      if (res.error) setError(res.error);
      else setSummary(res.summary);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copy = async () => {
    await navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Panel
      title="AI Report Card Assistant"
      action={
        !open ? (
          <button
            onClick={() => setOpen(true)}
            className="rounded-xl bg-gradient-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 shadow-soft inline-flex items-center gap-1.5"
          >
            <Sparkles className="h-3.5 w-3.5" /> Open
          </button>
        ) : (
          <button onClick={() => setOpen(false)} className="text-xs font-semibold text-muted-foreground">
            Close
          </button>
        )
      }
    >
      {!open ? (
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-gradient-primary shadow-glow flex items-center justify-center text-primary-foreground">
            <Sparkles className="h-5 w-5" />
          </div>
          <p className="text-sm text-muted-foreground">
            Drop a few bullet points about a student — get a warm, professional one-paragraph summary in seconds.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          <div>
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Student name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={80}
              placeholder="Aanya Sharma"
              className="mt-1 w-full rounded-2xl border border-border bg-card px-4 py-2.5 text-sm outline-none focus:border-primary focus:shadow-soft transition-all"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Bullet points
            </label>
            <textarea
              value={bullets}
              onChange={(e) => setBullets(e.target.value)}
              maxLength={2000}
              rows={5}
              placeholder={"• Strong in algebra\n• Helps classmates with Python\n• Could speak up more in discussions\n• Improved attendance this term"}
              className="mt-1 w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-primary focus:shadow-soft transition-all resize-none"
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full rounded-2xl bg-gradient-primary text-primary-foreground font-semibold py-3 shadow-glow hover:scale-[1.01] active:scale-[0.99] transition-transform inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <><Loader2 className="h-4 w-4 animate-spin" /> Generating…</>
            ) : (
              <><Sparkles className="h-4 w-4" /> Generate summary</>
            )}
          </button>

          {error && (
            <div className="rounded-2xl bg-destructive/10 text-destructive text-sm p-3 border border-destructive/20">
              {error}
            </div>
          )}

          {summary && (
            <div className="rounded-2xl bg-gradient-cool/10 border border-border p-4 relative">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Suggested summary
              </div>
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{summary}</p>
              <button
                onClick={copy}
                className="absolute top-3 right-3 rounded-xl bg-card border border-border p-2 hover:shadow-soft transition-all"
                title="Copy"
              >
                {copied ? <Check className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          )}
        </div>
      )}
    </Panel>
  );
}
