# Pagina Web del Comité de Estudiantes de Ingeniería en Ciencias de la Computación

## 🚀 Iniciar el proyecto

El proyecto se encuentra realizado en Astro y está dentro de un contenedor de Docker.

Podemos iniciar el proyecto de forma nativa con NodeJS (requiere NodeJS 22 & pnpm) o con Docker.

### Iniciar con Docker

Para iniciar el proyecto con Docker, debemos tener instalado Docker y Docker Compose.

```sh
docker-compose up --build
```

El proyecto se iniciará en `localhost:4321` en el `container` de Docker. Pero debido a la configuración de Docker, se puede acceder a `localhost:8000` en el navegador.

Esto se puede cambiar modificando el archivo `docker-compose.yml` en la sección de `ports`:

```yml
ports:
  - "8000:4321"
```

Donde el primer valor es el puerto del host y el segundo valor es el puerto del contenedor.

### Iniciar con NodeJS

Para iniciar el proyecto con NodeJS, debemos tener instalado NodeJS 22 y pnpm.

```sh
pnpm install
pnpm run dev
```

Para crear la versión de producción, ejecutamos el siguiente comando:

```sh
pnpm run build
```

Y para previsualizar la versión de producción, ejecutamos el siguiente comando:

```sh
pnpm run preview
```

## 🚀 Estructura del Proyecto

Dentro de este proyecto de Astro, encontramos la siguiente estructura de carpetas:

```text
/
├── public/
│   ├── activities/
│   ├── directive/
│   └── favicon.webp
|   └── ...
|
├── src/
│   ├── components/
│   │   └── .../
│   ├── data/
│   │   └── .../
│   └── pages/
|       ├── gestiones-pasadas/
│       │   └──[year].astro
│       ├── actividades.astro
│       └── index.astro
│
└── package.json
```

Para entender como funciona la estructura de proyectos en Astro: [guía de estructura de proyectos en Astro](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Comandos

Todos los comandos debes ser utilizados en la terminal en la raíz del proyecto, en caso de ser

| Command                    | Action                                                                 |
| :------------------------- | :--------------------------------------------------------------------- |
| `pnpm install / pnpm i`    | Instalar las dependencias dependencies                                 |
| `pnpm run dev`             | Inicia el servidor local en `localhost:4321`                           |
| `pnpm run build`           | Crear la versión de producción en `./dist/`                            |
| `pnpm run preview`         | Visualizar la versión de producción creada                             |
| `pnpm run astro ...`       | Para correr comandos nativos de astros como `astro add`, `astro check` |
| `pnpm run astro -- --help` | Obtener ayuda con el CLI de Astro                                      |

## 🧞‍♂️ Datos

Todos los componentes dinámicos consumen datos de la carpeta `src/data/`. Para trabajar con los componentes, entiéndase agregar, modificar o eliminar datos, se debe hacer en esta carpeta y los cambios se verán reflejados en los componentes.

## 👀 Componentes

### Navbar

Los enlaces de la barra de navegación se encuentran en el archivo `src/data/navbar.data.ts`. Donde cada objeto del arreglo representa un enlace de la barra de navegación.

### About Us

La información de la sección de "Nosotros" se encuentra en el archivo `src/data/about.data.ts`. Donde cada objeto del arreglo representa la información de cada card de información.

Agregar los valores de `buttonText` y `buttonLink` para agregar un botón en la card.

### Activities

La información de la sección de "Actividades" se encuentra en el archivo `src/data/activities.data.ts`. Donde cada objeto del arreglo representa la información de cada card de actividad.

Agregar el valor opcional `picture` para agregar un imagen del evento que se mostrará en la página de actividades destacadas.

Agregar el valor opcional `link` para agregar un enlace al botón de la card.

### Directive

La información de la sección de "Directiva" se encuentra en el archivo `src/data/directives.data.ts`. Donde cada objeto del arreglo representa la información de cada card de miembro de la directiva.

Para poder acceder de forma intuitiva a la información de cada directiva que tenemos en el objeto `directives`, se creó el `DirectiveYearEnum` que contiene los años de gestión de la directiva. Esto nos permite acceder de esta forma:

```ts
directives["2025" as DirectiveYearEnum].members;
directives["2024" as DirectiveYearEnum].members;
directives["2023" as DirectiveYearEnum].members;
```

Evitando así acceder de forma directa `(directives[0].members)` y tener que recordar el índice de cada año.

Para acceder a la foto de dicho comité completo se puede acceder mediante el objeto `directivesImages` que contiene la foto de cada comité. Para acceder a las fotos hacemos uso del ya creado `DirectiveYearEnum`:

```ts
directivesImages["2025" as DirectiveYearEnum].members;
directivesImages["2024" as DirectiveYearEnum].members;
directivesImages["2023" as DirectiveYearEnum].members;
```

La selección del comité que se debe mostrar en la homepage se realiza en el archivo `src/data/homepage.data.ts`.

```ts
const CURRENT_YEAR = new Date().getFullYear().toString();
const PREVIOUS_YEAR = (new Date().getFullYear() - 1).toString();

export const directive =
  directives[CURRENT_YEAR as DirectiveYearEnum] ??
  directives[PREVIOUS_YEAR as DirectiveYearEnum];

export const image =
  directivesImages[CURRENT_YEAR as DirectiveYearEnum] ??
  directivesImages[PREVIOUS_YEAR as DirectiveYearEnum];
```

Aquí tenemos dos constantes que nos permiten seleccionar el comité actual o el comité anterior, en caso de que el comité actual no exista. Esto de forma automática, sin necesidad de cambiar el año manualmente.

Cuando se crea una entrada nueva en el enum `DirectiveYearEnum`, se deben crear las entradas correspondientes en los objetos `directives` y `directivesImages`.

El valor opcional `href` está pensado para agregar el LinkedIn de cada miembro de la directiva.

### FAQ

La información de la sección de "Preguntas Frecuentes" se encuentra en el archivo `src/data/questions.data.ts`. Donde cada objeto del arreglo representa la información de cada pregunta frecuente.

### Footer

La información de la sección de "Footer" se encuentra en el archivo `src/data/footer.data.ts`. Donde cada objeto del arreglo representa una fila de información del footer. Cada objeto tiene un arreglo de objetos que representan los enlaces de cada fila.

### Pagina de Gestiones Pasadas

En esta página se encuentran las gestiones pasadas de la directiva en una linea de tiempo. Para agregar se debe agregar al anteriormente mencionado `DirectiveYearEnum` el año de la gestión y agregar la información de la gestión en el archivo `src/data/directives.data.ts`.

Está página se crea de manera dinámica usando el las [rutas dinámicas de astro](https://docs.astro.build/en/guides/routing/#dynamic-routes). En este caso tenemos `gestiones-pasadas/[year].astro` donde `year` es el año de la gestión.

A nivel de rutas se generaría para cada entrada del objeto `directives`, sería algo como `gestiones-pasadas/yyyy` donde `yyyy` es el año de la gestión.

Si se ingresa a una ruta que no existe, se redirige a la página de inicio (que es un redirect que nos hace el 404).

### Página de Actividades

En esta página se encuentran las actividades realizadas por el comité. Para agregar se debe agregar la información de la actividad en el anteriormente mencionado archivo `src/data/activities.data.ts`.'

Aquí es donde para que una actividad se muestre, debemos agregar el valor opcional `picture` para agregar un imagen del evento que se mostrará en la página de actividades destacadas.

El orden de las actividades se muestra de forma descendente a nivel de objeto, es decir, el primer objeto es el último evento realizado.

La cantidad de actividades que se muestran en esta página se controla directamente en el componente `Pagination en src/components/Cards/featured/Activities/Featured/ActivityRender/Pagination.astro` en la constante `ITEMS_PER_PAGE` y la constante `itemsPerPage` en el script que se encuentra debajo. Es importante saber que la paginación es a nivel de cliente y no a nivel de servidor.
