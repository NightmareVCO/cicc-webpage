export type Directive = {
  name: string;
  position: string;
  description: string;
  image: string;
  href?: string;
};

export enum DirectiveYearEnum {
  Year2023 = "2023",
  Year2024 = "2024",
}

export const directives: Record<DirectiveYearEnum, Directive[]> = {
  [DirectiveYearEnum.Year2023]: [
  {
    name: "Darvy Betances",
    position: "Presidente",
    description:
      "El presidente del Comité es el encargado de liderar la asociación y velar por el cumplimiento de los estatutos y la buena marcha de la asociación.",
    image: "/directive/2023/Darvy.webp",
    href: "https://www.linkedin.com/in/darvybm/",
  },
  {
    name: "Anthony Beato",
    position: "Vicepresidente",
    description:
      "El vicepresidente del Comité es el encargado de apoyar al presidente en sus funciones y de suplirlo en caso de ausencia.",
    image: "/directive/2023/Anthony.webp",
    href: "https://www.linkedin.com/in/anthony-beato-abreu-2b9a3a219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Marcos Blanco",
    position: "Secretario",
    description:
      "La secretaria del Comité es la encargada de llevar las actas de las reuniones y de mantener la comunicación con los miembros de la asociación.",
    image: "/directive/2023/Marcos.webp",
    href: "https://www.linkedin.com/in/marcos-white?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Albert García",
    position: "Logística y Eventos",
    description:
      "La encargada de logística y eventos es la responsable de organizar las actividades y eventos de la asociación, así como de coordinar con los demás miembros del Comité.",
    image: "/directive/2023/Albert.webp",
  },
  {
    name: "Carlos Peterson",
    position: "Fotógrafo",
    description:
      "El fotógrafo del Comité es el encargado de capturar los momentos más importantes de la asociación y de documentar las actividades de la asociación.",
    image: "/directive/2023/Carlos.webp",
    href: "https://www.linkedin.com/in/carlos-eleazar-peterson-garc%C3%ADa-62306626a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Gabriel Cepeda",
    position: "Tesorero",
    description:
      "El tesorero del Comité es el encargado de llevar las finanzas de la asociación y de velar por el buen uso de los recursos económicos.",
    image: "/directive/2023/Gabriel.webp",
    href: "https://www.linkedin.com/in/gabriel-cepeda-023983270",
  },
  {
    name: "Bryant Reynoso",
    position: "Web Master",
    description:
      "El web master del Comité es el encargado de mantener y actualizar la página web de la asociación, así como de coordinar con los demás miembros del Comité.",
    image: "/directive/2023/Bryant.webp",
  },
  {
    name: "Eduardo Martínez",
    position: "Relacionador Público",
    description:
      "El relacionador público del Comité es el encargado de mantener la comunicación con los miembros de la asociación y de promover las actividades de la asociación en la comunidad.",
    image: "/directive/2023/Eduardo.webp",
    href: "https://www.linkedin.com/in/eduardo-mart%C3%ADnez-2b4527278",
  },
  ],

  [DirectiveYearEnum.Year2024]: [
  {
    name: "Vladimir Curiel",
    position: "Presidente",
    description:
      "El presidente del Comité es el encargado de liderar la asociación y velar por el cumplimiento de los estatutos y la buena marcha de la asociación.",
    image: "/directive/2024/Vladimir.webp",
    href: "https://www.linkedin.com/in/vladimircuriel/",
  },
  {
    name: "Juan Alvarado",
    position: "Vicepresidente",
    description:
      "El vicepresidente del Comité es el encargado de apoyar al presidente en sus funciones y de suplirlo en caso de ausencia.",
    image: "/directive/2024/Juan.webp",
    href: "https://www.linkedin.com/in/juan-alvarado-a5a995231",
  },
  {
    name: "Brigibel Martínez",
    position: "Secretaria",
    description:
      "La secretaria del Comité es la encargada de llevar las actas de las reuniones y de mantener la comunicación con los miembros de la asociación.",
    image: "/directive/2024/Brigibel.webp",
  },
  {
    name: "Sara Contreras",
    position: "Logística y Eventos",
    description:
      "La encargada de logística y eventos es la responsable de organizar las actividades y eventos de la asociación, así como de coordinar con los demás miembros del Comité.",
    image: "/directive/2024/Sara.webp",
    href: "https://www.linkedin.com/in/sara-contreras-88287a314/",
  },
  {
    name: "Leandro Jiménez",
    position: "Tesorero",
    description:
      "El tesorero del Comité es el encargado de llevar las finanzas de la asociación y de velar por el buen uso de los recursos económicos.",
    image: "/directive/2024/Leandro.webp",
    href: "https://www.linkedin.com/in/leandro-jimenez0/",
  },
  {
    name: "Steven Mateo",
    position: "Relacionador Público",
    description:
      "El relacionador público del Comité es el encargado de mantener la comunicación con los miembros de la asociación y de promover las actividades de la asociación en la comunidad.",
    image: "/directive/2024/Steven.webp",
    href: "https://www.linkedin.com/in/steven-manuel-mateo-ramos-6626152b2/",
  },
  {
    name: "Carlos Peterson",
    position: "Vocal 2",
    description:
      "El vocal 2 del Comité es el encargado de capturar los momentos más importantes de la asociación y de documentar las actividades de la asociación.",
    image: "/directive/2024/Carlos.webp",
    href: "https://www.linkedin.com/in/carlos-eleazar-peterson-garc%C3%ADa-62306626a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  }
  ],
};

export const directivesImages: Record<DirectiveYearEnum, string> = {
  [DirectiveYearEnum.Year2023]: "/directive/2023/Miembros.webp",
  [DirectiveYearEnum.Year2024]: "/directive/2024/Miembros.webp",
};