import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

/* ---------- Botones ---------- */

type Variant = "default" | "primary" | "inverse" | "inverse-primary";

function Roll({ children }: { children: ReactNode }) {
  return (
    <span className="roll">
      <span className="roll-text">{children}</span>
      <span className="roll-text roll-hover" aria-hidden>
        {children}
      </span>
    </span>
  );
}

export function Button({
  href,
  children,
  variant = "default",
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  type?: "submit" | "button";
}) {
  const cls = `button ${variant}`;
  if (!href) {
    return (
      <button type={type ?? "button"} className={cls}>
        <Roll>{children}</Roll>
      </button>
    );
  }
  return (
    <Link href={href} className={cls}>
      <Roll>{children}</Roll>
    </Link>
  );
}

/** Enlace en mayúsculas con línea inferior animada. */
export function ButtonText({
  href,
  children,
  inverse,
}: {
  href: string;
  children: ReactNode;
  inverse?: boolean;
}) {
  return (
    <Link href={href} className={`button-text${inverse ? " inverse" : ""}`}>
      <Roll>{children}</Roll>
      <span className="button-text-line" />
    </Link>
  );
}

export function Label({ children, variant = "muted" }: { children: ReactNode; variant?: "muted" | "default" | "inverse" }) {
  return (
    <span className={`label ${variant}`}>
      <span className="label-dot" />
      {children}
    </span>
  );
}

/* ---------- Tarjetas con esquinas invertidas ---------- */

type Fill = "br" | "bl" | "tr";
const ROTATE: Record<Fill, number> = { br: 0, bl: 90, tr: 270 };

function Corner({ fill, style }: { fill: Fill; style: CSSProperties }) {
  return (
    <svg
      className="corner"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      aria-hidden
      style={{ ...style, transform: `rotate(${ROTATE[fill]}deg)` }}
    >
      <path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" />
    </svg>
  );
}

const CORNERS: Record<Fill, CSSProperties[]> = {
  br: [{ top: -40, right: 0 }, { bottom: 0, left: -40 }],
  bl: [{ top: -40, left: 0 }, { bottom: 0, right: -40 }],
  tr: [{ top: 0, left: -40 }, { bottom: -40, right: 0 }],
};

/**
 * Tarjeta blanca anclada a una esquina de una imagen, con las curvas
 * cóncavas que la funden con la foto (firma visual del diseño).
 */
export function Card({
  pos,
  children,
  className = "",
}: {
  pos: Fill;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`card card-${pos} ${className}`}>
      {CORNERS[pos].map((s, i) => (
        <Corner key={i} fill={pos} style={s} />
      ))}
      {children}
    </div>
  );
}

/* ---------- Redes sociales ---------- */

const ICONS: Record<string, ReactNode> = {
  Instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </>
  ),
  Pinterest: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M10.5 20l2-8m0 0c-1-2 .2-4.5 2.5-4.5 3 0 3 5-.5 5.5-1 .1-1.6-.4-2-1" />
    </>
  ),
  Behance: (
    <path d="M3 7h5a2.5 2.5 0 010 5H3zm0 5h5.5a2.75 2.75 0 010 5.5H3zM14.5 14.5h6.5a3.25 3.25 0 10-.9 2.3M15 8h5" />
  ),
  LinkedIn: (
    <>
      <path d="M6 10v8M6 6.5v.01M10 18v-8m0 3.5a3.5 3.5 0 017 0V18" />
    </>
  ),
};

export function Socials({ items }: { items: readonly { name: string; href: string }[] }) {
  return (
    <div className="socials">
      {items.map((s) => (
        <a key={s.name} href={s.href} className="badge-link" aria-label={s.name} target="_blank" rel="noreferrer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            {ICONS[s.name]}
          </svg>
        </a>
      ))}
    </div>
  );
}
