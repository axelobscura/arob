import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AROB ILUMINACIÓN ARQUITECTÓNICA PROFESIONAL EN MÉXICO',
  description: 'El despacho de arob iluminación arquitectónica en México se dedica al diseño, planificación y ejecución de proyectos de iluminación en entornos arquitectónicos, tanto interiores como exteriores. Su objetivo es resaltar la belleza y funcionalidad de los espacios a través de la iluminación adecuada, creando ambientes atractivos y seguros.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
