import { LAYOUT } from "@/modules/app/constant/layout.constant";
import { AppBaseWrapper } from "@/modules/app/ui/components/base";
import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/auth",
    meta: {
      requiresAuth: false,
      layout: LAYOUT.AUTH,
    },
    component: AppBaseWrapper,
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("../ui/AuthLoginUI.vue"),
      },
    ],
  },
];

export default routes;
