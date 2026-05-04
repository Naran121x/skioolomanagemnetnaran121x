import type { ReactNode } from "react";

export function PageShell({
  title,
  emoji,
  subtitle,
  actions,
  children,
}: {
  title: string;
  emoji?: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-3 border-b border-border pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {emoji && <span>{emoji}</span>}
            <span>Skoolio</span>
          </div>
          <h1 className="mt-1 font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            {title}
          </h1>
          {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
        </div>
        {actions}
      </header>
      {children}
    </div>
  );
}
