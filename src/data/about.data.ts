
export type Card = {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
};

export const cards: Card[] = [
  {
    title: "Misión",
    description:
      "Nuestra misión es brindar a los estudiantes de la carrera de ingeniería en ciencias de la computación una plataforma para su crecimiento profesional y personal. Ofreciendo actividades recreativas, proyectos prácticos y talleres para mejorar sus habilidades técnicas y de liderazgo, desarrollando así una red sólida de compañeros de campo.",
  },
  {
    title: "Visión",
    description:
      "Nuestra misión es brindar a los estudiantes de la carrera de ingeniería en ciencias de la computación una plataforma para su crecimiento profesional y personal. Ofreciendo actividades recreativas, proyectos prácticos y talleres para mejorar sus habilidades técnicas y de liderazgo, desarrollando así una red sólida de compañeros de campo.",
  },
  {
    title: "Carrera",
    description:
      "El ingeniero en Ciencias de la Computación posee bases sólidas de conocimiento sobre ingeniería de software, ciencias computacionales, desarrollo de sistemas, arquitectura de la información, infraestructura computacional y gestión de proyectos.",
    buttonText: "Ver más",
    buttonLink: "https://eict.pucmm.edu.do/ciencias-computacion/",
  },
];

export default cards;