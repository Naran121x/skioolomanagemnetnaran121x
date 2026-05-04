import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import { QrCode, RefreshCw, Users } from "lucide-react";
import { Panel } from "./shared";

function makeToken() {
  return `skoolio-attend-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function LiveAttendance() {
  const [active, setActive] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [scanned, setScanned] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(60);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!active || !token || !canvasRef.current) return;
    QRCode.toCanvas(canvasRef.current, token, {
      width: 220,
      margin: 1,
      color: { dark: "#1f1147", light: "#ffffff" },
    });
  }, [active, token]);

  useEffect(() => {
    if (!active) return;
    const tick = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0));
      // Simulate students scanning in
      if (Math.random() > 0.55) setScanned((c) => Math.min(c + 1, 28));
    }, 1000);
    return () => clearInterval(tick);
  }, [active]);

  const start = () => {
    setToken(makeToken());
    setScanned(0);
    setSecondsLeft(60);
    setActive(true);
  };
  const refresh = () => {
    setToken(makeToken());
    setSecondsLeft(60);
  };
  const stop = () => {
    setActive(false);
    setToken(null);
  };

  return (
    <Panel
      title="Live Attendance"
      action={
        active ? (
          <button onClick={stop} className="text-xs font-semibold text-muted-foreground hover:text-destructive transition-colors">
            End session
          </button>
        ) : null
      }
    >
      {!active ? (
        <div className="flex flex-col items-center text-center py-4">
          <div className="h-16 w-16 rounded-2xl bg-gradient-primary shadow-glow flex items-center justify-center text-primary-foreground">
            <QrCode className="h-7 w-7" />
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Generate a fresh QR code. Students scan with their Skoolio app to mark attendance instantly.
          </p>
          <button
            onClick={start}
            className="mt-5 rounded-2xl bg-gradient-primary text-primary-foreground font-semibold px-6 py-3 shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            Generate QR Code
          </button>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <div className="rounded-3xl bg-background p-3 shadow-soft border border-border">
            <canvas ref={canvasRef} className="rounded-2xl" />
          </div>
          <div className="flex-1 w-full space-y-3">
            <div className="rounded-2xl bg-gradient-success p-4 text-primary-foreground shadow-soft">
              <div className="flex items-center gap-2 text-xs opacity-90">
                <Users className="h-3.5 w-3.5" /> Scanned in
              </div>
              <div className="mt-1 text-3xl font-display font-bold">
                {scanned}<span className="text-base opacity-80"> / 28</span>
              </div>
            </div>
            <div className="rounded-2xl bg-muted/60 p-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">QR refreshes in</span>
                <span className="font-semibold">{secondsLeft}s</span>
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-background overflow-hidden">
                <div
                  className="h-full bg-gradient-primary transition-all"
                  style={{ width: `${(secondsLeft / 60) * 100}%` }}
                />
              </div>
            </div>
            <button
              onClick={refresh}
              className="w-full rounded-2xl border border-border hover:bg-accent/20 text-sm font-semibold py-2.5 inline-flex items-center justify-center gap-2 transition-colors"
            >
              <RefreshCw className="h-4 w-4" /> Rotate code
            </button>
          </div>
        </div>
      )}
    </Panel>
  );
}
