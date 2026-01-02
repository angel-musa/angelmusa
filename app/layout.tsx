// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";
import { Inter, Playfair_Display } from "next/font/google";
import RouteShell from "../components/RouteShell";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });

export const metadata = {
  title: "Angel Musa — Portfolio",
  description: "Personal website for Angel Musa",
  icons: { icon: "/favicon.ico" },
};

const NAV = [
  { label: "Industry", href: "/industry" },
  { label: "Editions", href: "/editions" },
  { label: "Collective", href: "/collective" },
  { label: "Thoughts", href: "/thoughts" },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        {/* Magazine masthead */}
        <header className="sticky top-0 z-50 bg-[rgba(255,255,255,0.86)] backdrop-blur border-b border-black/10">
          <div className="container py-4">
            {/* top hairline */}
            <div className="hidden md:block h-px w-full bg-black/10 mb-4" />

            <div className="flex items-center justify-between gap-6">
              {/* Left: tiny issue line */}
              <div className="hidden md:block meta text-[10px] text-black/50">
                Portfolio
              </div>

              {/* Center: masthead title */}
              <Link
                href="/"
                className="display text-2xl md:text-3xl leading-none tracking-[0.08em] uppercase"
              >
                Angel Musa
              </Link>

              {/* Right: contact */}
              <div className="flex items-center gap-3">
                <Link className="btn btn-gold" href="/#contact">
                  Contact
                </Link>
              </div>
            </div>

            {/* Nav row */}
            <nav className="mt-4 hidden md:flex items-center justify-center gap-10 text-sm">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  className="navlink meta text-[11px]"
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile nav */}
            <nav className="md:hidden mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              {NAV.map((item) => (
                <Link key={item.href} className="navlink meta text-[11px]" href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* bottom hairline */}
            <div className="hidden md:block h-px w-full bg-black/10 mt-4" />
          </div>
        </header>

        <RouteShell>{children}</RouteShell>

        <footer className="container py-12 text-sm text-black/60">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <p>© {new Date().getFullYear()} Angel Musa.</p>
            <div className="flex gap-4">
              <a className="navlink meta text-[11px]" href="https://github.com/angel-musa" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="navlink meta text-[11px]" href="https://www.linkedin.com/in/angel-musa" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
