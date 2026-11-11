"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * En escritorio (≥992px) convierte el scroll vertical en desplazamiento
 * horizontal: el contenedor se fija en pantalla y la pista se traslada
 * en X. En tablet/móvil el contenido fluye en vertical de forma normal.
 */
export default function HorizontalScroll({ children }: { children: ReactNode }) {
  const outer = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const o = outer.current;
    const t = track.current;
    if (!o || !t) return;
    const mq = window.matchMedia("(min-width: 992px)");
    let raf = 0;

    const distance = () => Math.max(0, t.scrollWidth - window.innerWidth);

    const update = () => {
      if (!mq.matches) return;
      const y = Math.min(Math.max(-o.getBoundingClientRect().top, 0), distance());
      t.style.transform = `translate3d(${-y}px,0,0)`;
    };

    const layout = () => {
      if (!mq.matches) {
        o.style.height = "";
        t.style.transform = "";
        return;
      }
      o.style.height = `${distance() + window.innerHeight}px`;
      update();
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    const ro = new ResizeObserver(layout);
    ro.observe(t);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", layout);
    mq.addEventListener("change", layout);
    layout();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", layout);
      mq.removeEventListener("change", layout);
    };
  }, []);

  return (
    <div ref={outer} className="hs layout-horizontal">
      <div className="hs-sticky">
        <div ref={track} className="hs-track">
          {children}
        </div>
      </div>
    </div>
  );
}
