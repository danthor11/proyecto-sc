interface RouteHref {
  href: string;
  pathName: string;
  needAuth: boolean;
}

const routesHref: Array<RouteHref> = [
  {
    href: "/",
    pathName: "Home",
    needAuth: true,
  },
  {
    href: "/login",
    pathName: "Sign in",
    needAuth: false,
  },
  {
    href: "/register",
    pathName: "Sign up",
    needAuth: false,
  },
  {
    href: "/censo",
    pathName: "Datos de Censo",
    needAuth: true,
  },
  {
    href: "/casas",
    pathName: "Casas",
    needAuth: true,
  },
];

export default routesHref;
