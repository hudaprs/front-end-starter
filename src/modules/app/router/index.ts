import { useAuthStore } from '@/modules/auth/store/auth.store';

import { createRouter, createWebHistory, type RouteLocationNormalized, type RouteRecordRaw } from 'vue-router';

import { AppCommonEntryPoint, AppCommonNotFound } from '@/modules/app/ui/components/common';
import { useTableStore } from '../store/table.store';

const routes: Array<RouteRecordRaw> = [];
const modules = import.meta.glob('/**/*.route.ts');

for (const path in modules) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const module: any = await modules[path]();
  routes.push(...module.default);
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Entry Point
    {
      path: '/',
      component: AppCommonEntryPoint,
    },

    // Auto register routes
    ...routes,

    // Not Found
    {
      path: '/:catchAll(.*)',
      component: AppCommonNotFound,
    },
  ],
});

router.beforeEach((to: RouteLocationNormalized) => {
  // https://pinia.vuejs.org/core-concepts/outside-component-usage.html#single-page-applications
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.auth_isAuthenticated) return { name: 'login' };
});

router.beforeResolve((to, from) => {
  const tableStore = useTableStore();
  if (to.meta.menuGroup !== from.meta.menuGroup) tableStore.table_clearAllTableState();
});

export default router;
