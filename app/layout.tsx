import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AROB ILUMINACIÓN ARQUITECTÓNICA PROFESIONAL EN MÉXICO",
  description:
    "El despacho de arob iluminación arquitectónica en México se dedica al diseño, planificación y ejecución de proyectos de iluminación en entornos arquitectónicos, tanto interiores como exteriores. Su objetivo es resaltar la belleza y funcionalidad de los espacios a través de la iluminación adecuada, creando ambientes atractivos y seguros.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* General Sans (títulos) + Satoshi (texto) — Fontshare, licencia libre */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500&display=swap" />
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500&display=swap" />
      </head>
      <body>{children}</body>
    </html>
  );
}
