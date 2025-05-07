export const ROUTES = {
  home: {
    path: "/",
    title: "Inicio"
  },
  sobreAnimalx: {
    title: "Animalx",
    routes: [
      {
        path: "about",
        title: "Sobre Animalx"
      },
      {
        path: "servicios",
        title: "Servicios"
      },
      {
        path: "adopcion",
        title: "Adopción"
      }
    ]
  },
  blog: {
    path: "/blog",
    title: "Blog"
  },
  notFound: {
    path: "*",
    title: "Not Found"
  }
}