import { LAYOUT } from "@/modules/app/constant/layout.constant";
import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/notes",
    name: "notes",
    meta: {
      requiresAuth: true,
      layout: LAYOUT.DEFAULT,
    },
    component: () => import("../ui/NotesUI.vue"),
  },
];

export default routes;
