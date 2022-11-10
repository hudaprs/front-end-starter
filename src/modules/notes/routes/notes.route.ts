import { LAYOUT } from '@/modules/app/constant/layout.constant';
import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/notes',
    meta: { requiresAuth: true, menuGroup: 'NOTES', breadcrumb: 'notes.title' },
    children: [
      {
        path: '',
        name: 'notes',
        meta: {
          requiresAuth: true,
          layout: LAYOUT.DEFAULT,
          title: 'notes.title',
          menuGroup: 'NOTES',
        },
        component: () => import('../ui/NotesUI.vue'),
      },
      {
        path: 'create',
        name: 'notes-create',
        meta: {
          requiresAuth: true,
          layout: LAYOUT.DEFAULT,
          title: 'notes.create',
          menuGroup: 'NOTES',
          breadcrumb: 'notes.create',
        },
        component: () => import('../ui/NotesCreateUI.vue'),
      },
    ],
  },
];

export default routes;
