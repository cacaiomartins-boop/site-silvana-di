import type { ReactNode } from "react";
import { Hex } from "./Icons";

/** Rótulo de seção: número + filete + texto */
export function Eyebrow({ n, label, d = 0 }: { n?: string; label: string; d?: number }) {
  return (
    <span className="eb rv" data-d={d}>
      {n && <i>{n}</i>}
      <b></b>
      <span>{label}</span>
    </span>
  );
}

/** Ornamento: filete + símbolo + filete */
export function Ornamento({ d = 150 }: { d?: number }) {
  return (
    <span className="orn rv" data-d={d}>
      <b></b>
      <Hex size={20} sw={1.4} />
      <b></b>
    </span>
  );
}

/** Título de seção: "antes <em>destaque</em> depois" */
export function Titulo({ antes, destaque, depois = "", d = 100 }: { antes: string; destaque: string; depois?: string; d?: number }) {
  return (
    <h2 className="rv" data-d={d}>
      {antes}
      <em>{destaque}</em>
      {depois}
    </h2>
  );
}

export function CabSec({ n, label, children }: { n: string; label: string; children: ReactNode }) {
  return (
    <div className="cab-sec">
      <Eyebrow n={n} label={label} />
      {children}
      <Ornamento />
    </div>
  );
}
