"use client";

type T = { s: string; p: string; chg: number };

const TICKERS: T[] = [
  { s: "AAPL", p: "232.41", chg: +1.2 },
  { s: "MSFT", p: "432.18", chg: +0.8 },
  { s: "NVDA", p: "986.40", chg: +2.1 },
  { s: "TSLA", p: "245.77", chg: -0.6 },
  { s: "AMZN", p: "183.12", chg: +1.5 },
  { s: "META", p: "507.33", chg: +0.3 },
  { s: "GOOGL", p: "171.22", chg: -0.2 },
  { s: "SPY", p: "554.61", chg: +0.4 },
  { s: "QQQ", p: "488.52", chg: +0.9 },
  { s: "BTC", p: "63,420", chg: +2.7 },
];

export default function TickerTape() {
  // Duplicate the row so the marquee loops seamlessly
  const row = [...TICKERS, ...TICKERS];

  return (
    <div className="relative w-full overflow-hidden border-t border-white/10 bg-[rgb(10_30_22_/_.8)] backdrop-blur">
      <div className="whitespace-nowrap will-change-transform animate-[marquee_28s_linear_infinite]">
        {row.map((t, i) => {
          const up = t.chg >= 0;
          return (
            <span
              key={t.s + i}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs"
            >
              <span className="font-mono opacity-80">{t.s}</span>
              <span className="font-mono">{t.p}</span>
              <span
                className={`font-mono ${
                  up ? "text-emerald-400" : "text-red-400"
                }`}
              >
                {up ? "▲" : "▼"} {Math.abs(t.chg).toFixed(1)}%
              </span>
              <span className="opacity-20">|</span>
            </span>
          );
        })}
      </div>

      {/* keyframes without editing tailwind.config */}
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
