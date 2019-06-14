import { lazy } from "react";

const routeConfig = [
  {
    path: "/",
    name: "首页",
    component: () => import("../pages/home")
  },
  {
    path: "/list",
    name: "列表",
    component: () => import("../pages/list")
  }
];

function getRoutes(routes) {
  return routes.map(route => {
    const { component } = route;
    return {
      ...route,
      component: lazy(component)
    };
  });
}

function getMenus(routes) {
  return routes.map(route => {
    const { path, name } = route;
    return {
      path,
      name
    };
  });
}

const routes = getRoutes(routeConfig);
const menus = getMenus(routeConfig);

export { routes, menus };
