import type { ReactNode } from "react";

export function PageShell({
  title,
  emoji,
  subtitle,
  children,
}: {
  title: string;
  emoji?: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-6">
      <header className="rounded-3xl bg-gradient-primary p-6 text-primary-foreground shadow-glow">
        <div className="flex items-center gap-3">
          {emoji && <span className="text-3xl">{emoji}</span>}
          <h1 className="font-display text-2xl md:text-3xl font-bold">{title}</h1>
        </div>
        {subtitle && <p className="mt-1 text-sm opacity-90">{subtitle}</p>}
      </header>
      {children}
    </div>
  );
}
