import { LAYOUT_PUBLIC } from "@/modules/app/constant/layout.constant";
import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/dashboard",
    name: "dashboard",
    meta: {
      requiresAuth: true,
      layout: LAYOUT_PUBLIC,
    },
    component: () => import("../ui/DashboardUI.vue"),
  },
];

export default routes;
