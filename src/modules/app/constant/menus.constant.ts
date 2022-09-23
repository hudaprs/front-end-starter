import type { RouteLocationRaw } from "vue-router";

interface IMenus {
  title: string;
  icon?: string;
  route?: RouteLocationRaw;
  desc?: string;
}

export const FRONT_MENUS: Array<IMenus> = [
  {
    title: "Dashboard",
    icon: "ri-home-6-line",
    route: { name: "dashboard" },
    desc: "Dashboard Page",
  },
  {
    title: "Menu #2",
    icon: "ri-community-line",
    route: { name: "dashboard" },
    desc: "Menu Desc #2",
  },
  {
    title: "Menu #3",
    icon: "ri-community-line",
    route: { name: "dashboard" },
    desc: "Menu Desc #3",
  },
  {
    title: "Menu #4",
    icon: "ri-community-line",
    route: { name: "dashboard" },
    desc: "Menu Desc #4",
  },
];
