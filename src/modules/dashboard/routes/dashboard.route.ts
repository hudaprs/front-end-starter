import { LAYOUT } from "@/modules/app/constant/layout.constant";
import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/dashboard",
    name: "dashboard",
    meta: {
      requiresAuth: true,
      layout: LAYOUT.DEFAULT,
    },
    component: () => import("../ui/DashboardUI.vue"),
  },
];

export default routes;
