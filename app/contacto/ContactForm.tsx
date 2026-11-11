"use client";

import { useState, type FormEvent } from "react";
import { Button } from "../components/ui";
import { site } from "../data/site";

/**
 * Sin backend todavía: al enviar abre el cliente de correo con el mensaje
 * prellenado. Sustituir por una API route / servicio de formularios.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Contacto web — ${data.get("name")}`;
    const body = `${data.get("message")}\n\n${data.get("name")} · ${data.get("email")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return <div className="form-success">¡Gracias! Tu mensaje está listo para enviarse desde tu correo.</div>;
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="contact-form-grid">
        <label className="form-field">
          <span className="form-label">Nombre *</span>
          <input className="form-input" name="name" required placeholder="Tu nombre" />
        </label>
        <label className="form-field">
          <span className="form-label">Correo electrónico *</span>
          <input className="form-input" name="email" type="email" required placeholder="nombre@correo.com" />
        </label>
      </div>
      <label className="form-field">
        <span className="form-label">Mensaje *</span>
        <textarea className="form-input is-text-area" name="message" required placeholder="Cuéntanos sobre tu proyecto" />
      </label>
      <Button type="submit" variant="primary">
        Enviar mensaje
      </Button>
    </form>
  );
}
