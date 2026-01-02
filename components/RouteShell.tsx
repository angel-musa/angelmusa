// components/RouteShell.tsx
"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import TickerTape from "./TickerTape";

export default function RouteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const showTicker = pathname.startsWith("/work"); // only markets page

  return (
    <>
      <main className="container py-10">{children}</main>
      {showTicker ? <TickerTape /> : null}
    </>
  );
}
