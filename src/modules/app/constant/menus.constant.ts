import type { RouteLocationRaw } from "vue-router";

interface IMenus {
  title: string;
  icon?: string;
  route?: RouteLocationRaw;
  desc?: string;
}

export const FRONT_MENUS: Array<IMenus> = [
  {
    title: "dashboard.title",
    icon: "ri-home-6-line",
    route: { name: "dashboard" },
    desc: "Dashboard Page",
  },
  {
    title: "notes.title",
    icon: "ri-booklet-line",
    route: { name: "notes" },
    desc: "Notes Page",
  },
  // {
  //   title: "Menu #3",
  //   icon: "ri-community-line",
  //   route: { name: "dashboard" },
  //   desc: "Menu Desc #3",
  // },
  // {
  //   title: "Menu #4",
  //   icon: "ri-community-line",
  //   route: { name: "dashboard" },
  //   desc: "Menu Desc #4",
  // },
];
