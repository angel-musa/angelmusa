import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";
import { Inter, Sora } from "next/font/google";
import TickerTape from "../components/TickerTape"; 

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata = {
  title: "Angel Musa — Portfolio",
  description: "Personal website for Angel Musa",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <header className="border-b border-white/10 sticky top-0 bg-[rgb(15_47_35_/_.6)] backdrop-blur z-50">
          <div className="container flex items-center justify-between py-4">
            <Link href="/" className="text-lg font-semibold">Angel Musa</Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link className="hover:opacity-90" href="/work">Work</Link>
              <Link className="hover:opacity-90" href="/projects">Projects</Link>
              <a className="btn" href="#contact">Contact</a>
            </nav>
          </div>
        </header>

        <main className="container py-8">{children}</main>

        {/* Ticker Tape Footer (full-width) */}
        <TickerTape />

        <footer className="container py-12 text-sm text-[var(--muted)]">
          <div className="flex justify-between items-center">
            <p>© {new Date().getFullYear()} Angel Musa. All rights reserved.</p>
            <div className="flex gap-4">
              <a className="link" href="https://github.com/angel-musa" target="_blank">GitHub</a>
              <a className="link" href="https://www.linkedin.com/in/angel-musa" target="_blank">LinkedIn</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
