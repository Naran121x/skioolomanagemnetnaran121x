import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card/80 backdrop-blur-md p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function StatCard({
  label,
  value,
  delta,
  hint,
}: {
  label: string;
  value: string | number;
  delta?: string;
  hint?: string;
}) {
  return (
    <GlassCard className="p-5">
      <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="font-display text-2xl font-bold text-foreground">{value}</span>
        {delta && <span className="text-xs font-medium text-success">{delta}</span>}
      </div>
      {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
    </GlassCard>
  );
}

export function DataTable<T extends Record<string, ReactNode>>({
  columns,
  rows,
}: {
  columns: { key: keyof T; label: string; className?: string }[];
  rows: T[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card/80 backdrop-blur-md">
      <table className="w-full text-sm">
        <thead className="bg-muted/50 text-xs uppercase tracking-wider text-muted-foreground">
          <tr>
            {columns.map((c) => (
              <th key={String(c.key)} className={cn("px-4 py-3 text-left font-semibold", c.className)}>
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-border hover:bg-muted/30 transition-colors">
              {columns.map((c) => (
                <td key={String(c.key)} className={cn("px-4 py-3", c.className)}>
                  {row[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ChartPlaceholder({
  title,
  height = 220,
}: {
  title: string;
  height?: number;
}) {
  // Decorative SVG chart placeholder — pure CSS/SVG, no real data
  return (
    <GlassCard>
      <div className="flex items-center justify-between">
        <h3 className="font-display font-semibold text-foreground">{title}</h3>
        <span className="text-xs text-muted-foreground">Last 30 days</span>
      </div>
      <svg
        viewBox="0 0 600 220"
        preserveAspectRatio="none"
        className="mt-4 w-full"
        style={{ height }}
      >
        <defs>
          <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.55 0.18 275)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="oklch(0.55 0.18 275)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[40, 80, 120, 160, 200].map((y) => (
          <line key={y} x1="0" x2="600" y1={y} y2={y} stroke="oklch(0.93 0.01 270)" strokeWidth="1" />
        ))}
        <path
          d="M0,160 C60,140 100,80 160,90 C220,100 260,150 320,130 C380,110 420,40 480,60 C540,80 580,50 600,60 L600,220 L0,220 Z"
          fill="url(#g1)"
        />
        <path
          d="M0,160 C60,140 100,80 160,90 C220,100 260,150 320,130 C380,110 420,40 480,60 C540,80 580,50 600,60"
          fill="none"
          stroke="oklch(0.55 0.18 275)"
          strokeWidth="2"
        />
      </svg>
    </GlassCard>
  );
}
