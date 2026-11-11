import type { Metadata } from "next";
import Footer from "../components/Footer";
import HorizontalScroll from "../components/HorizontalScroll";
import Navbar from "../components/Navbar";
import { vars } from "../components/ProjectCard";
import { ButtonText, Card, Label } from "../components/ui";
import { images, team } from "../data/site";

export const metadata: Metadata = { title: "Nosotros — AROB Iluminación Arquitectónica" };

export default function QuienesSomos() {
  return (
    <HorizontalScroll>
      <main className="main-wrapper">
        <section className="hsec page-hero">
          <Navbar />
          <div className="hsec-inner">
            <span />
            <div>
              <h1 className="heading-medium allcaps mb-m">Nosotros</h1>
              <p className="text-size-large mb-m">
                Somos un despacho dedicado al diseño, planificación y ejecución de proyectos de iluminación en
                entornos arquitectónicos, tanto interiores como exteriores.
              </p>
              <ButtonText href="/galeria">Ver proyectos</ButtonText>
            </div>
          </div>
          <div className="media-card" style={vars({ "--w": "60vw", "--r": "2.5rem", "--ar": "4/3" })}>
            <img className="cover" src={images.aboutHero} alt="" />
          </div>
        </section>

        <section className="hsec split">
          <div className="media-card hang-top" style={vars({ "--w": "90vh", "--r": "0 0 2.5rem 2.5rem", "--ar": "4/3" })}>
            <img className="cover" src={images.aboutHow} alt="" loading="lazy" />
          </div>
          <div className="hsec-inner">
            <Label>Cómo trabajamos</Label>
            <div>
              <h2 className="heading-h3 mb-s">La luz como material de proyecto</h2>
              <p className="text-size-medium mb-m">
                Escuchamos, analizamos el espacio y trabajamos codo a codo con arquitectos e interioristas. Cada
                decisión —temperatura de color, óptica, control— responde a cómo se vivirá el lugar.
              </p>
              <blockquote className="quote">
                <p className="text-size-medium mb-s">“Entendieron la casa mejor que nadie. La luz la terminó de construir.”</p>
                <div className="text-meta text-muted">Cliente residencial · Valle de Bravo</div>
              </blockquote>
            </div>
          </div>
        </section>

        <section className="hsec split">
          <div className="media-card hang-bottom" style={vars({ "--w": "90vh", "--r": "2.5rem 2.5rem 0 0", "--ar": "4/3" })}>
            <img className="cover" src={images.aboutMission} alt="" loading="lazy" />
          </div>
          <div className="hsec-inner">
            <Label>Nuestra misión</Label>
            <div>
              <h2 className="heading-h3 mb-s">Iluminar mejor con menos energía</h2>
              <p className="text-size-medium">
                Creemos en una iluminación eficiente, cálida y respetuosa con el entorno y el cielo nocturno.
                Diseñamos sistemas que duran, que se mantienen fácilmente y que hacen sentir bien a las personas.
              </p>
            </div>
          </div>
        </section>

        <div className="section-line" />

        <section className="hsec">
          <div className="hsec-inner">
            <Label>Equipo</Label>
            <div>
              <h2 className="heading-h2 mb-s">Nuestro equipo</h2>
              <p className="text-size-medium">
                Diseñadores, ingenieros y arquitectos con una misma obsesión: que cada espacio se vea y se sienta
                mejor gracias a la luz.
              </p>
            </div>
          </div>
          <div className="hlist">
            {team.map((m) => (
              <div key={m.name} className="media-card" style={vars({ "--w": "34vw", "--r": "2.5rem 2.5rem 2.5rem 0", "--ar": "3/4" })}>
                <img className="cover" src={m.image} alt={m.name} loading="lazy" />
                <Card pos="bl" className="team-card">
                  <h3 className="heading-h5">{m.name}</h3>
                  <div className="text-meta text-muted">{m.role}</div>
                </Card>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </HorizontalScroll>
  );
}
