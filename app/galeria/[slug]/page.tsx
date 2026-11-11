import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import HorizontalScroll from "../../components/HorizontalScroll";
import Navbar from "../../components/Navbar";
import ProjectCard, { vars } from "../../components/ProjectCard";
import { Card, Label } from "../../components/ui";
import { projects } from "../../data/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const p = projects.find((x) => x.slug === params.slug);
  return { title: p ? `${p.title} — AROB` : "Proyecto — AROB" };
}

export default function Proyecto({ params }: Props) {
  const index = projects.findIndex((p) => p.slug === params.slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  const meta = [
    { k: "Ubicación", v: project.location },
    { k: "Año", v: project.year },
    { k: "Duración", v: project.duration },
  ];

  return (
    <HorizontalScroll>
      <main className="main-wrapper">
        <section className="hsec page-hero">
          <Navbar />
          <div className="hsec-inner">
            <span />
            <div>
              <Label>{project.category}</Label>
              <h1 className="heading-medium allcaps mb-m mt-s">{project.title}</h1>
              <p className="text-size-large">{project.excerpt}</p>
            </div>
          </div>
        </section>

        <section className="hsec split">
          <div className="media-card hang-top" style={vars({ "--w": "max(90vw, 1200px)", "--r": "0 0 2.5rem 0", "--ar": "4/3" })}>
            <img className="cover" src={project.image} alt={project.title} />
            <Card pos="bl" className="meta-card">
              {meta.map((m, i) => (
                <div key={m.k} className="meta-item">
                  {i > 0 && <span className="meta-divider" />}
                  <div>
                    <div className="text-meta text-muted mb-xxs">{m.k}</div>
                    <div className="heading-h6">{m.v}</div>
                  </div>
                </div>
              ))}
            </Card>
          </div>
          <div className="hsec-inner">
            <Label>Sobre el proyecto</Label>
            <div>
              <h2 className="heading-h3 mb-s">{project.about.heading}</h2>
              <p className="text-size-medium mb-m">{project.about.body}</p>
              <div className="text-meta text-muted mb-xs">Servicios</div>
              <ul className="service-tags">
                {project.services.map((s) => (
                  <li key={s} className="label default">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="hsec gallery">
          {project.gallery.map((src, i) => (
            <div key={src} className="media-card" style={vars({ "--w": i === 1 ? "60vh" : "100vh", "--r": "2.5rem", "--ar": i === 1 ? "3/4" : "4/3" })}>
              <img className="cover" src={src} alt="" loading="lazy" />
            </div>
          ))}
        </section>

        <div className="section-line" />

        <section className="hsec projects">
          <div className="hsec-inner">
            <Label>Siguiente</Label>
            <div>
              <h2 className="heading-medium allcaps mb-s">Siguiente</h2>
              <p className="text-size-medium">Sigue recorriendo nuestros proyectos.</p>
            </div>
          </div>
          <div className="hlist">
            <ProjectCard project={next} width="75vw" />
          </div>
        </section>
      </main>
      <Footer />
    </HorizontalScroll>
  );
}
