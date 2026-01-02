// components/RouteTheme.tsx
"use client";

import { useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import RoutePattern from "./RoutePattern";

type ThemeVars = {
  bg: string;
  ink: string;
  muted: string;

  panelRgb: string; // "15 47 35"
  panelAlpha: string; // "0.80"

  accentRgb: string; // "34 197 94"
  glow: string; // "rgba(34 197 94 / 0.35)"

  border: string; // "rgba(0,0,0,0.10)" or "rgba(255,255,255,0.10)"
  showTicker?: boolean;
};

const MAGAZINE: ThemeVars = {
  bg: "#f6f1e8",
  ink: "#121212",
  muted: "rgba(18,18,18,0.62)",

  panelRgb: "255 255 255",
  panelAlpha: "0.66",

  accentRgb: "20 20 20",
  glow: "rgba(0 0 0 / 0.10)",

  border: "rgba(0,0,0,0.10)",
  showTicker: true,
};

const MARKETS: ThemeVars = {
  bg: "#0a1f18",
  ink: "#e5f3ed",
  muted: "#b6d8cd",

  panelRgb: "15 47 35",
  panelAlpha: "0.80",

  accentRgb: "34 197 94",
  glow: "rgba(34 197 94 / 0.35)",

  border: "rgba(255,255,255,0.10)",
  showTicker: true,
};

export default function RouteTheme({
  children,
  onTicker,
}: {
  children: React.ReactNode;
  onTicker?: (show: boolean) => void;
}) {
  const pathname = usePathname();

  const theme = useMemo(() => {
    // Only /work gets markets vibe.
    if (pathname.startsWith("/work")) return MARKETS;
    // Everything else = fashion magazine.
    return MAGAZINE;
  }, [pathname]);

  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty("--bg", theme.bg);
    root.style.setProperty("--ink", theme.ink);
    root.style.setProperty("--muted", theme.muted);

    root.style.setProperty("--panel-rgb", theme.panelRgb);
    root.style.setProperty("--panel-alpha", theme.panelAlpha);

    root.style.setProperty("--accent-rgb", theme.accentRgb);
    root.style.setProperty("--glow", theme.glow);

    root.style.setProperty("--border", theme.border);

    onTicker?.(theme.showTicker ?? true);
  }, [theme, onTicker]);

  return (
    <div className="relative">
      <RoutePattern pathname={pathname} />
      {children}
    </div>
  );
}
