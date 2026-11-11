import Link from "next/link";
import { offices, pages, projects, site, socials } from "../data/site";
import { Button, Card, Socials } from "./ui";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <h2 className="heading-large allcaps mb-m">
            Iluminemos
            <br />
            tu espacio
          </h2>
          <Button href="/contacto" variant="inverse-primary">
            Hablemos
          </Button>
        </div>

        <div className="footer-nav">
          <div className="footer-column">
            <div className="text-meta text-muted-inverse">Oficinas</div>
            {offices.map((o) => (
              <div key={o.city} className="text-size-small">
                <div className="heading-h6 mb-xxs">{o.city}</div>
                {o.lines.map((l) => (
                  <div key={l} className="text-muted-inverse">
                    {l}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="footer-column">
            <div className="text-meta text-muted-inverse">Páginas</div>
            <div className="nav">
              {pages.map((p) => (
                <Link key={p.href} href={p.href} className="nav-item">
                  <span className="nav-item-text">{p.label}</span>
                  <span className="nav-item-line" />
                </Link>
              ))}
            </div>
          </div>
          <div className="footer-column">
            <div className="text-meta text-muted-inverse">Proyectos</div>
            <div className="nav">
              {projects.map((p) => (
                <Link key={p.slug} href={`/galeria/${p.slug}`} className="nav-item">
                  <span className="nav-item-text">{p.title}</span>
                  <span className="nav-item-line" />
                </Link>
              ))}
            </div>
          </div>
          <div className="footer-column">
            <div className="text-meta text-muted-inverse">Contacto</div>
            <div className="nav">
              <a href={`mailto:${site.email}`} className="nav-item">
                <span className="nav-item-text">{site.email}</span>
                <span className="nav-item-line" />
              </a>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="nav-item">
                <span className="nav-item-text">{site.phone}</span>
                <span className="nav-item-line" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Card pos="br" className="footer-socials">
        <div className="text-meta">
          © {new Date().getFullYear()} {site.name}. {site.tagline}.
        </div>
        <Socials items={socials} />
      </Card>
    </footer>
  );
}
