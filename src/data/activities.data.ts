export type Activity = {
  title: string;
  description: string;
  cover: string;
  picture?: string;
  link?: string;
};

export const activities: Activity[] = [
  {
    title: "BarCamp 2024",
    description:
      "BarCamp RD 2024 es un evento de tecnología que reúne a profesionales, estudiantes y entusiastas de la tecnología en un solo lugar.",
    cover: "/activities/barcamp-2024.webp",
    picture: "/activities/barcamp-result-2024.webp",
    link: "https://barcamp.org.do",
  },
  {
    title: "Sesión MLSA 2024",
    description:
      "Microsoft Learn Student Ambassadors es un programa de Microsoft que busca empoderar a los estudiantes para liderar en sus comunidades.",
    cover: "/activities/mlsa-1-2024.webp",
    picture: "/activities/mlsa-1-result-2024.webp",
    link: "https://www.instagram.com/p/C8OJx2ytakn/",
  },
  {
    title: "Taller MLSA 2024",
    description: "Taller de Microsoft Learn Student Ambassadors en la PUCMM acerca del uso de PowerBI con Python y JupyterNotebooks.",
    cover: "/activities/mlsa-1-2024.webp",
    picture: "/activities/mlsa-2-result-2024.webp",
    link: "https://www.instagram.com/p/DAMQztGxN3C/",
  },
  {
    title: "OpenHouse 2024",
    description:
      "OpenHouse 2024 es un evento en el que los estudiantes de colegio visitan la universidad para conocer la oferta académica y perfil profesional de la universidad.",
    cover: "/activities/openhouse-2024.webp",
    picture: "/activities/openhouse-result-2024.webp",
    link: "https://www.instagram.com/p/C4gjeNjuA_I",
  },
  {
    title: "BarCamp 2023",
    description:
      "BarCamp RD 2023 es un evento de tecnología que reúne a profesionales, estudiantes y entusiastas de la tecnología en un solo lugar.",
    cover: "/activities/barcamp-2023.webp",
    picture: "/activities/barcamp-result-2023.webp",
    link: "https://2023.barcamp.org.do",
  },
  {
    title: "CodeJam 2023",
    description:
      "CodeJam RD 2023 es una competencia de programación en la que los participantes deben resolver problemas de algoritmos en un tiempo limitado.",
    cover: "/activities/codejam-2023.webp",
    picture: "/activities/codejam-result-2023.webp",
    link: "https://www.instagram.com/p/Ct9RiGRO6To/",
  },
  {
    title: "DayPass 2023",
    description:
      "Es cuando los estudiantes de colegio van un día a la universidad a tomar clases con los estudiantes de la universidad y ver cómo es la vida universitaria.",
    cover: "/activities/daypass-2023.webp",
    link: "https://www.instagram.com/p/Cs6QMM0OfBT/",
  },
  {
    title: "OpenHouse 2023",
    description:
      "OpenHouse 2023 es un evento en el que los estudiantes de colegio visitan la universidad para conocer la oferta académica y perfil profesional de la universidad.",
    cover: "/activities/openhouse-2023.webp",
    picture: "/activities/openhouse-result-2023.webp",
    link: "https://www.instagram.com/p/Cpyi8xkDFa7",
  },
];

export default activities;