import Footer from "./components/Footer";
import HorizontalScroll from "./components/HorizontalScroll";
import Navbar from "./components/Navbar";
import ProjectCard, { vars } from "./components/ProjectCard";
import { ButtonText, Card, Label } from "./components/ui";
import { clients, images, projects, services } from "./data/site";

export default function Home() {
  return (
    <HorizontalScroll>
      <main className="main-wrapper">
        {/* Hero */}
        <section className="home-hero">
          <Navbar />
          <div className="media-card hero-media" style={vars({ "--w": "100%", "--r": "0" })}>
            <img className="cover" src={images.hero} alt="Residencia iluminada al atardecer" />
            <div className="gradient" />
            <div className="media-content hero-content">
              <h1 className="heading-hero">
                Diseñamos
                <br />
                con luz
              </h1>
            </div>
            <Card pos="br" className="hero-card">
              <p className="text-size-large">
                Iluminación arquitectónica profesional en México. Proyectos de luz para interiores y exteriores que
                resaltan la belleza y la funcionalidad de cada espacio.
              </p>
            </Card>
          </div>
        </section>

        {/* Lo que hacemos */}
        <section className="hsec">
          <div className="hsec-inner">
            <Label>Lo que hacemos</Label>
            <div>
              <h2 className="heading-h2 mb-s">
                Arquitectura
                <br />
                que se revela
              </h2>
              <p className="text-size-medium mb-m">
                En AROB unimos diseño, técnica y sensibilidad para crear ambientes atractivos, seguros y eficientes.
                Acompañamos cada proyecto desde el concepto hasta la puesta en marcha de la última luminaria.
              </p>
              <ButtonText href="/quienes-somos">Nosotros</ButtonText>
            </div>
          </div>
          <div className="logos">
            {clients.map((c) => (
              <span key={c} className="logo-word">
                {c}
              </span>
            ))}
          </div>
        </section>

        {/* Servicios */}
        <section className="hsec services">
          <div className="media-card services-main" style={vars({ "--w": "100vh", "--r": "2.5rem 0 2.5rem 2.5rem", "--ar": "4/5" })}>
            <img className="cover" src={images.servicesMain} alt="" loading="lazy" />
            <div className="gradient" />
            <div className="media-content">
              <h2 className="heading-medium allcaps">Servicios</h2>
            </div>
            <Card pos="tr" className="service-card">
              <h3 className="heading-h5 mb-xxs">{services.main.title}</h3>
              <p className="text-size-small text-muted">{services.main.text}</p>
            </Card>
          </div>
          <div className="services-stack">
            <div className="media-card" style={vars({ "--w": "min(60vw, 800px)", "--r": "2.5rem 2.5rem 0 2.5rem" })}>
              <img className="cover" src={images.servicesInterior} alt="" loading="lazy" />
              <Card pos="br" className="service-card small">
                <h3 className="heading-h5 mb-xxs">{services.interior.title}</h3>
                <p className="text-size-small text-muted">{services.interior.text}</p>
              </Card>
            </div>
            <div className="media-card" style={vars({ "--w": "min(60vw, 800px)", "--r": "2.5rem 2.5rem 2.5rem 0" })}>
              <img className="cover" src={images.servicesExterior} alt="" loading="lazy" />
              <Card pos="bl" className="service-card small">
                <h3 className="heading-h5 mb-xxs">{services.exterior.title}</h3>
                <p className="text-size-small text-muted">{services.exterior.text}</p>
              </Card>
            </div>
          </div>
        </section>

        <div className="section-line" />

        {/* Proyectos destacados */}
        <section className="hsec projects">
          <div className="hsec-inner">
            <Label>Proyectos seleccionados</Label>
            <div>
              <h2 className="heading-h2 mb-s">
                Espacios
                <br />
                que brillan
              </h2>
              <p className="text-size-medium mb-m">
                Una selección de proyectos residenciales, corporativos y de hospitalidad donde la luz es parte esencial
                de la arquitectura.
              </p>
              <ButtonText href="/galeria">Todos los proyectos</ButtonText>
            </div>
          </div>
          <div className="hlist">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </HorizontalScroll>
  );
}
