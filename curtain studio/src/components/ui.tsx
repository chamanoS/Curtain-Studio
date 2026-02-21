import { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return <div className="rounded-2xl bg-white/60 border border-black/5 shadow-soft">{children}</div>;
}

export function CardBody({ children }: { children: ReactNode }) {
  return <div className="p-6">{children}</div>;
}

export function SectionTitle({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <div className="text-xs uppercase tracking-widest text-black/60">{eyebrow}</div>}
      <h2 className="mt-2 text-2xl md:text-3xl font-semibold">{title}</h2>
      {subtitle && <p className="mt-2 text-black/70">{subtitle}</p>}
    </div>
  );
}
