// components/RoutePattern.tsx
"use client";

export default function RoutePattern({ pathname }: { pathname: string }) {
  const isWork = pathname.startsWith("/work");

  if (isWork) return <MarketsPattern />;
  return <MagazinePattern />;
}

function MarketsPattern() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div
        className="absolute -bottom-28 left-0 right-0 h-80"
        style={{ background: "radial-gradient(closest-side, var(--glow), transparent 70%)" }}
      />
      <svg className="absolute bottom-6 left-0 right-0 w-full opacity-20" viewBox="0 0 1200 120">
        <path
          d="M0,90 C120,30 220,110 330,70 C450,25 520,95 640,60 C760,25 840,75 960,40 C1070,10 1140,40 1200,20"
          fill="none"
          stroke="rgba(var(--accent-rgb)/0.55)"
          strokeWidth="2.5"
        />
      </svg>
    </div>
  );
}

function MagazinePattern() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* paper vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 600px at 20% 10%, rgba(0,0,0,0.04), transparent 60%), radial-gradient(900px 600px at 80% 80%, rgba(0,0,0,0.035), transparent 60%)",
        }}
      />

      {/* “print” hairline rules */}
      <div className="absolute left-6 right-6 top-24 h-px" style={{ background: "var(--border)" }} />
      <div className="absolute left-6 right-6 bottom-24 h-px" style={{ background: "var(--border)" }} />

      {/* grain (very subtle) */}
      <svg className="absolute inset-0 opacity-[0.06]" width="100%" height="100%">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}
