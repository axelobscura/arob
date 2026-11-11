// Contenido central del sitio. Sustituye textos e imágenes por los reales de AROB.
// Las imágenes actuales son marcadores de posición de Unsplash (licencia libre).

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const site = {
  name: "AROB",
  tagline: "Iluminación arquitectónica",
  email: "hola@arob.mx",
  phone: "+52 55 0000 0000",
};

export const nav = [
  { href: "/galeria", label: "Proyectos" },
  { href: "/quienes-somos", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export const pages = [
  { href: "/", label: "Inicio" },
  ...nav,
];

export const socials = [
  { name: "Instagram", href: "#" },
  { name: "Pinterest", href: "#" },
  { name: "Behance", href: "#" },
  { name: "LinkedIn", href: "#" },
] as const;

export const offices = [
  {
    city: "Ciudad de México",
    lines: ["Av. Álvaro Obregón 120, Roma Norte", "06700 CDMX, México"],
  },
  {
    city: "Monterrey",
    lines: ["Calzada del Valle 400, Del Valle", "66220 San Pedro, N.L."],
  },
];

export const clients = ["Nórdica", "Lumen", "Casa Alta", "Obra Viva", "Tierra", "Habitar"];

export const images = {
  hero: img("1600585154340-be6161a56a0c", 2400),
  servicesMain: img("1487958449943-2429e8be8625", 2000),
  servicesInterior: img("1513694203232-719a280e022f"),
  servicesExterior: img("1512917774080-9991f1c4c750"),
  aboutHero: img("1507089947368-19c1da9775ae", 2000),
  aboutHow: img("1600607687939-ce8a6c25118c", 2000),
  aboutMission: img("1503174971373-b1f69850bded", 2000),
  contact: img("1519710164239-da123dc03ef4", 2000),
};

export const services = {
  main: {
    title: "Iluminación arquitectónica",
    text: "Diseñamos la luz desde el proyecto: resaltamos volúmenes, materiales y recorridos para que cada edificio se lea de día y de noche.",
  },
  interior: {
    title: "Interiores",
    text: "Escenas de luz cálidas y funcionales que acompañan la vida diaria y realzan cada espacio.",
  },
  exterior: {
    title: "Exteriores y paisaje",
    text: "Fachadas, jardines y recorridos iluminados con eficiencia y respeto al cielo nocturno.",
  },
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  location: string;
  year: string;
  duration: string;
  image: string;
  about: { heading: string; body: string };
  services: string[];
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "casa-del-lago",
    title: "Casa del Lago",
    category: "Residencial",
    excerpt:
      "Una residencia frente al agua donde la luz cálida dibuja la arquitectura y prolonga el paisaje hacia la noche.",
    location: "Valle de Bravo",
    year: "2024",
    duration: "8 meses",
    image: img("1600585154340-be6161a56a0c", 2400),
    about: {
      heading: "Luz que sigue al paisaje",
      body: "Trabajamos junto al equipo de arquitectura desde el anteproyecto para integrar luminarias ocultas en plafones, muros y terrazas. El resultado es una casa que se ilumina por capas: luz rasante en la piedra, bañados suaves en interiores y un exterior que se funde con el lago sin deslumbrar.",
    },
    services: ["Arquitectónica", "Interiores", "Paisaje"],
    gallery: [
      img("1600566753190-17f0baa2a6c3"),
      img("1493809842364-78817add7ffb"),
      img("1505691938895-1758d7feb511"),
    ],
  },
  {
    slug: "torre-reforma",
    title: "Torre Reforma",
    category: "Corporativo",
    excerpt:
      "Un corporativo de oficinas con fachada dinámica y espacios de trabajo pensados para el confort visual.",
    location: "Ciudad de México",
    year: "2023",
    duration: "1 año",
    image: img("1486406146926-c627a92ad1ab", 2400),
    about: {
      heading: "Una fachada que respira",
      body: "Diseñamos un sistema de iluminación de fachada controlable por escenas y un esquema interior con luz indirecta y control de deslumbramiento, reduciendo el consumo energético del edificio sin sacrificar calidad de luz.",
    },
    services: ["Fachada", "Oficinas", "Control"],
    gallery: [
      img("1497366216548-37526070297c"),
      img("1565538810643-b5bdb714032a"),
      img("1513161455079-7dc1de15ef3e"),
    ],
  },
  {
    slug: "villa-serena",
    title: "Villa Serena",
    category: "Hospitalidad",
    excerpt:
      "Un hotel boutique donde cada escena de luz acompaña el ritmo del día, del amanecer a la cena.",
    location: "Tulum",
    year: "2023",
    duration: "10 meses",
    image: img("1494526585095-c41746248156", 2400),
    about: {
      heading: "Atmósferas para descansar",
      body: "Proyectamos la iluminación de habitaciones, restaurante y áreas exteriores con fuentes de baja altura y temperaturas de color cálidas, protegiendo la fauna local y creando ambientes íntimos.",
    },
    services: ["Hospitalidad", "Interiores", "Exteriores"],
    gallery: [
      img("1524758631624-e2822e304c36"),
      img("1507089947368-19c1da9775ae"),
      img("1519710164239-da123dc03ef4"),
    ],
  },
];

export const team = [
  { name: "Ana Robles", role: "Directora de diseño", image: img("1534528741775-53994a69daeb", 1200) },
  { name: "Diego Ortega", role: "Diseñador de iluminación", image: img("1507003211169-0a1dd7228f2d", 1200) },
  { name: "Luis Bernal", role: "Ingeniero de proyecto", image: img("1500648767791-00dcc994a43e", 1200) },
];
