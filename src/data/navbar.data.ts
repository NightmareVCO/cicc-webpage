export type Link = {
  href: string;
  text: string;
};

const LAST_YEAR = new Date().getFullYear() - 1;

export const links: Link[] = [
  { href: "/#inicio", text: "Inicio" },
  { href: "/#nosotros", text: "Nosotros" },
  { href: "/#actividades", text: "Actividades" },
  { href: "/#directiva", text: "Directiva" },
  { href: "/#comite", text: "Comité" },
  { href: "/#preguntas-frecuentes", text: "Preguntas frecuentes" },
  { href: `/gestiones-pasadas/${LAST_YEAR}/#inicio`, text: "Gestiones Pasadas" },
  { href: "/actividades/#inicio", text: "Actividades Destacadas" },
];

export default links;