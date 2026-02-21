import { useId, useState } from "react";

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  className,
}: {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
}) {
  const id = useId();
  const [pct, setPct] = useState(55);

  return (
    <div className={className ?? ""}>
      <div className="relative overflow-hidden rounded-2xl border border-black/5 bg-white shadow-soft">
        <img src={beforeSrc} alt={beforeAlt} className="block w-full h-full object-cover" />

        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
          aria-hidden
        >
          <img src={afterSrc} alt={afterAlt} className="block w-full h-full object-cover" />
        </div>

        <div className="absolute inset-y-0" style={{ left: `${pct}%` }} aria-hidden>
          <div className="h-full w-px bg-white/80" />
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-ink text-paper px-3 py-2 text-xs shadow-soft">
            Drag
          </div>
        </div>

        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
          <span className="rounded-full bg-white/80 px-3 py-1 text-xs text-ink">Before</span>
          <span className="rounded-full bg-white/80 px-3 py-1 text-xs text-ink">After</span>
        </div>
      </div>

      <div className="mt-3">
        <label htmlFor={id} className="sr-only">
          Before/after slider
        </label>
        <input
          id={id}
          type="range"
          min={0}
          max={100}
          value={pct}
          onChange={(e) => setPct(Number(e.target.value))}
          className="w-full"
        />
      </div>
    </div>
  );
}
