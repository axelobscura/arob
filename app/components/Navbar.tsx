"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, pages, projects, site, socials } from "../data/site";

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:") || href === "#";
  const cls = "nav-item";
  const inner = (
    <>
      <span className="nav-item-text">{children}</span>
      <span className="nav-item-line" />
    </>
  );
  return external ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <div className="header" ref={ref}>
      <nav className="navbar" aria-label="Principal">
        <button
          type="button"
          className={`navbar-toggle${open ? " is-open" : ""}`}
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="navbar-toggle-inner">
            <span className="navbar-toggle-line l1" />
            <span className="navbar-toggle-line l2" />
          </span>
        </button>

        <Link href="/" className="navbar-logo" aria-label={`${site.name} — inicio`}>
          {site.name}
        </Link>

        <div className="navbar-right">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`navbar-menu-item${isActive(item.href) ? " is-current" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      <div id="site-menu" className={`navbar-dropdown${open ? " is-open" : ""}`} hidden={!open}>
        <div className="navbar-dropdown-inner">
          <div className="navbar-dropdown-column">
            <div className="text-meta text-muted-inverse">Páginas</div>
            <div className="nav">
              {pages.map((p) => (
                <NavItem key={p.href} href={p.href}>
                  {p.label}
                </NavItem>
              ))}
            </div>
          </div>
          <div className="navbar-dropdown-column">
            <div className="text-meta text-muted-inverse">Proyectos</div>
            <div className="nav">
              {projects.map((p) => (
                <NavItem key={p.slug} href={`/galeria/${p.slug}`}>
                  {p.title}
                </NavItem>
              ))}
            </div>
          </div>
          <div className="navbar-dropdown-column">
            <div className="text-meta text-muted-inverse">Contacto</div>
            <div className="nav">
              <NavItem href={`mailto:${site.email}`}>{site.email}</NavItem>
              <NavItem href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</NavItem>
              {socials.map((s) => (
                <NavItem key={s.name} href={s.href}>
                  {s.name}
                </NavItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
