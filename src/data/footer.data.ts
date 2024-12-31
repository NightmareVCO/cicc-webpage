import type { Link }  from "@data/navbar.data";

export type FooterSection = {
  title: string;
  links: Link[];
};

export const footerSections: FooterSection[] = [
  {
    title: "Navegación",
    links: [
      { href: "/", text: "Inicio" },
      { href: "#nosotros", text: "Nosotros" },
      { href: "#actividades", text: "Actividades" },
      { href: "#directiva", text: "Directiva" },
      { href: "#comite", text: "Comité" },
      { href: "#preguntas-frecuentes", text: "Preguntas frecuentes" },
    ],
  },
  {
    title: "Recursos Externos",
    links: [
      {
        href: "https://eict.pucmm.edu.do/ciencias-computacion/",
        text: "Carrera",
      },
      {
        href: "/pensum.pdf",
        text: "Pensum",
      },
      {
        href: "https://eict.pucmm.edu.do/club-programacion/",
        text: "Club de programación",
      },
      {
        href: "https://eict.pucmm.edu.do/pasantias/",
        text: "Pasantías",
      },
    ],
  },
];

export default footerSections;