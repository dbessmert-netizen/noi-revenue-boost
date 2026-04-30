import * as React from "react";
import { T } from "./tokens";

export type Tone = "mute" | "solar" | "green" | "red" | "warn" | "ink";

export function Pill({ children, tone = "mute", style, className }: {
  children: React.ReactNode; tone?: Tone; style?: React.CSSProperties; className?: string;
}) {
  const tones: Record<Tone, { bg: string; fg: string; bd: string }> = {
    mute:  { bg: T.paperDeep, fg: T.inkSoft, bd: T.rule },
    solar: { bg: T.solarTint, fg: T.solar, bd: T.solarSoft },
    green: { bg: T.greenTint, fg: T.green, bd: "#B6CFC0" },
    red:   { bg: T.redTint,   fg: T.red,   bd: "#E2B5AB" },
    warn:  { bg: T.warnTint,  fg: T.warn,  bd: "#DDC890" },
    ink:   { bg: T.ink,       fg: T.paper, bd: T.ink },
  };
  const c = tones[tone];
  return (
    <span className={className} style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "3px 9px", fontSize: 11, fontWeight: 500,
      letterSpacing: "0.02em", textTransform: "uppercase",
      background: c.bg, color: c.fg,
      border: `1px solid ${c.bd}`, borderRadius: 999,
      whiteSpace: "nowrap",
      ...style,
    }}>{children}</span>
  );
}

export function Dot({ color = T.solar, size = 6 }: { color?: string; size?: number }) {
  return <span style={{ width: size, height: size, borderRadius: "50%", background: color, display: "inline-block" }} />;
}

type BtnKind = "primary" | "solar" | "ghost" | "light";
export const Btn = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & {
  kind?: BtnKind; icon?: React.ReactNode;
}>(function Btn({ kind = "primary", icon, children, style, ...rest }, ref) {
  const styles: Record<BtnKind, { bg: string; fg: string; bd: string }> = {
    primary: { bg: T.ink, fg: T.paper, bd: T.ink },
    solar:   { bg: T.solar, fg: T.paper, bd: T.solar },
    ghost:   { bg: "transparent", fg: T.ink, bd: T.rule },
    light:   { bg: T.card, fg: T.ink, bd: T.rule },
  };
  const s = styles[kind];
  return (
    <button ref={ref} {...rest} style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      padding: "8px 14px", fontSize: 13, fontWeight: 500,
      background: s.bg, color: s.fg, border: `1px solid ${s.bd}`,
      borderRadius: 8, cursor: "pointer", fontFamily: "inherit",
      transition: "opacity 120ms ease",
      ...style,
    }}>
      {icon}{children}
    </button>
  );
});

export function Card({ children, style, pad = 22, className }: {
  children: React.ReactNode; style?: React.CSSProperties; pad?: number; className?: string;
}) {
  return (
    <div className={className} style={{
      background: T.card,
      border: `1px solid ${T.rule}`,
      borderRadius: 12,
      padding: pad,
      ...style,
    }}>{children}</div>
  );
}

export function PageHeader({ eyebrow, title, sub, right }: {
  eyebrow?: string; title: React.ReactNode; sub?: string; right?: React.ReactNode;
}) {
  return (
    <div style={{
      padding: "28px 40px 22px",
      borderBottom: `1px solid ${T.rule}`,
      background: T.paper,
      display: "flex", alignItems: "flex-end", justifyContent: "space-between",
      gap: 24, flexWrap: "wrap",
    }}>
      <div>
        {eyebrow && <div className="font-mono" style={{ fontSize: 11, color: T.inkMute, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 8 }}>{eyebrow}</div>}
        <h1 className="font-display" style={{ fontSize: 44, lineHeight: 0.95, margin: 0, fontWeight: 500 }}>{title}</h1>
        {sub && <div style={{ marginTop: 10, fontSize: 14, color: T.inkSoft, maxWidth: 520 }}>{sub}</div>}
      </div>
      {right && <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>{right}</div>}
    </div>
  );
}
