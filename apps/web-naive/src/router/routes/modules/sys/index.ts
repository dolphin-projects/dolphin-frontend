import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      order: 10,
      icon: 'mdi:laptop-windows',
      title: $t('route.sys.title'),
    },
    name: 'Sys',
    path: '/sys',
    children: [
      {
        meta: {
          order: 10,
          icon: 'ic:round-construction',
          title: $t('route.sys.core.title'),
        },
        name: 'Core',
        path: '/sys/core',
        children: [
          {
            meta: {
              order: 10,
              icon: 'ic:round-list-alt',
              title: $t('route.sys.core.dictionary.title'),
            },
            name: 'Dictionary',
            path: '/sys/core/dictionary',
            component: () => import('#/views/sys/core/dictionary/index.vue'),
          },
        ],
      },
      {
        meta: {
          order: 20,
          icon: 'ic:outline-account-tree',
          title: $t('route.sys.rbac.title'),
        },
        name: 'Rbac',
        path: '/sys/rbac',
        children: [
          {
            meta: {
              order: 10,
              icon: 'mdi:home-city-outline',
              title: $t('route.sys.rbac.region.title'),
            },
            name: 'Region',
            path: '/sys/rbac/region',
            component: () => import('#/views/sys/core/dictionary/index.vue'),
          },
        ],
      },
    ],
  },
];

export default routes;
