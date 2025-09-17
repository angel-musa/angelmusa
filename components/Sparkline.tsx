type Props = {
  data: number[];           // e.g. [1,1.2,0.9,...]
  className?: string;
  strokeWidth?: number;
};

export default function Sparkline({ data, className, strokeWidth = 1.75 }: Props) {
  const w = 120;
  const h = 36;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const norm = (v: number) =>
    h - ((v - min) / (max - min || 1)) * (h - 4) - 2; // padding 2px
  const stepX = w / Math.max(data.length - 1, 1);
  const d = data
    .map((v, i) => `${i === 0 ? "M" : "L"} ${i * stepX} ${norm(v)}`)
    .join(" ");

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={className} aria-hidden>
      <path d={d} fill="none" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}
