// app/collective/page.tsx
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Item = {
  kicker: string;
  title: string;
  line: string; // ONE line only (as requested)
  href?: string;
};

const ITEMS: Item[] = [
  {
    kicker: "University of Waterloo Data Science Club",
    title: "VP Socials",
    line: "Winter ’26 — social media and content creation for the club",
  },
  {
    kicker: "ECE Society",
    title: "Member",
    line: "Helping shape community through student-led initiatives.",
  },
  {
    kicker: "Hackathon Build",
    title: "Fundr | HTV 2025",
    line: "Subsidy-matching product prototype — research, UX, and build.",
    href: "https://github.com/mahijoshii/fundr",
  },
];

export default function CollectivePage() {
  return (
    <div className="space-y-10">
      <header className="paper glitter p-8 md:p-10">
        <div className="meta">Section</div>
        <h1 className="display mt-3 text-4xl md:text-6xl leading-[0.95]">
          The <span className="headline-underline">Collective</span>
        </h1>
        <p className="mt-5 max-w-3xl text-[15px] md:text-base text-black/70">
          Clubs, community, and the things I build with people.
        </p>
      </header>

      <section className="space-y-6">
        {/* <div className="flex items-end justify-between">
          <div>
            <div className="meta">Highlights</div>
            <h2 className="display mt-2 text-2xl md:text-3xl">Selected</h2>
          </div>
        </div> */}

        <div className="rule" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ITEMS.map((x) => {
            const Card = (
              <div
                className={[
                  "paper glitter group relative p-7 transition h-full",
                  "hover:-translate-y-[2px]",
                  "hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)]",
                ].join(" ")}
              >
                {/* gold shading */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition"
                  style={{
                    background:
                      "radial-gradient(700px 240px at 18% 0%, rgba(var(--gold-rgb)/0.14), transparent 60%), radial-gradient(520px 200px at 82% 100%, rgba(var(--gold-rgb)/0.10), transparent 60%)",
                  }}
                />

                <div className="relative meta">{x.kicker}</div>
                <div className="relative mt-4 text-lg font-semibold flex items-center gap-2">
                  {x.title}
                  {x.href ? (
                    <span className="text-black/60 group-hover:text-black transition">
                      <ArrowUpRight size={16} />
                    </span>
                  ) : null}
                </div>

                {/* one-liner */}
                <div className="relative mt-2 text-sm text-black/70">{x.line}</div>

                {/* gold hairline */}
                <div
                  className="pointer-events-none absolute left-7 right-7 bottom-6 h-px opacity-70"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(var(--gold-rgb)/0.70), transparent)",
                  }}
                />
              </div>
            );

            return x.href ? (
              <a key={x.title} href={x.href} target="_blank" rel="noreferrer" className="block">
                {Card}
              </a>
            ) : (
              <div key={x.title}>{Card}</div>
            );
          })}
        </div>

        <div className="mt-2">
          <Link href="/editions" className="navlink meta">
            See projects →
          </Link>
        </div>
      </section>
    </div>
  );
}
