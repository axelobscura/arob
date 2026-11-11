import type { Metadata } from "next";
import Footer from "../components/Footer";
import HorizontalScroll from "../components/HorizontalScroll";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/site";

export const metadata: Metadata = { title: "Proyectos — AROB Iluminación Arquitectónica" };

export default function Galeria() {
  return (
    <HorizontalScroll>
      <main className="main-wrapper">
        <section className="hsec page-hero">
          <Navbar />
          <div className="hsec-inner">
            <span />
            <div>
              <h1 className="heading-medium allcaps mb-m">Proyectos</h1>
              <p className="text-size-large">
                Residencias, oficinas, hoteles y espacios públicos donde la luz fue diseñada como parte de la
                arquitectura. Desliza para recorrerlos.
              </p>
            </div>
          </div>
          <div className="hlist">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} width="75vw" />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </HorizontalScroll>
  );
}
