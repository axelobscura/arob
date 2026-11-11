import type { Metadata } from "next";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Card, Socials } from "../components/ui";
import { images, socials } from "../data/site";
import ContactForm from "./ContactForm";

export const metadata: Metadata = { title: "Contacto — AROB Iluminación Arquitectónica" };

export default function Contacto() {
  return (
    <div className="layout-vertical">
      <main className="main-wrapper">
        <section className="contact">
          <div className="contact-left">
            <Navbar />
            <h1 className="heading-medium">hablemos</h1>
            <ContactForm />
          </div>
          <div className="media-card contact-media" style={{ ["--r" as string]: "2.5rem 2.5rem 0 2.5rem" }}>
            <img className="cover" src={images.contact} alt="" />
            <Card pos="br" className="contact-socials">
              <span className="text-meta">Síguenos</span>
              <Socials items={socials} />
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
