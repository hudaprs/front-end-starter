export {};

import "vue-router";

// Constant
import type { LAYOUT } from "../constant/layout.constant";

declare module "vue-router" {
  interface RouteMeta {
    requiresAuth: boolean;
    layout?: LAYOUT;
    title?: string;
    breadcrumb?: string;
  }
}
