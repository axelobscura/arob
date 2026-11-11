import Link from "next/link";
import type { CSSProperties } from "react";
import type { Project } from "../data/site";
import { ButtonText, Card } from "./ui";

/** Variables CSS en línea: --w (ancho en modo horizontal), --r (radios), --ar (proporción en móvil). */
export const vars = (v: Record<string, string>) => v as CSSProperties;

export default function ProjectCard({ project, width = "90vw" }: { project: Project; width?: string }) {
  const href = `/galeria/${project.slug}`;
  return (
    <article className="media-card project-card" style={vars({ "--w": width, "--r": "2.5rem 2.5rem 0 2.5rem" })}>
      <img className="cover" src={project.image} alt={project.title} loading="lazy" />
      <div className="gradient" />
      <Link href={href} className="view-wrapper" aria-label={`Ver ${project.title}`}>
        <span className="view-button">Ver</span>
      </Link>
      <div className="media-content">
        <span className="text-meta">
          {project.category} · {project.location}
        </span>
      </div>
      <Card pos="br" className="project-card-info">
        <h3 className="heading-h4 mb-xs">{project.title}</h3>
        <p className="text-size-small text-muted mb-s">{project.excerpt}</p>
        <ButtonText href={href}>Explorar</ButtonText>
      </Card>
    </article>
  );
}
