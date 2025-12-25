import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'carbon:data-base',
      order: 10,
      title: $t('route.sys.title'),
    },
    name: 'Sys',
    path: '/sys',
    children: [
      {
        meta: {
          icon: 'carbon:data-base',
          order: 10,
          title: $t('route.sys.core.title'),
        },
        name: 'Core',
        path: '/sys/core',
        children: [
          {
            meta: {
              icon: 'carbon:data-base',
              order: 10,
              title: $t('route.sys.core.dictionary.title'),
            },
            name: 'Dictionary',
            path: '/sys/core/dictionary',
            component: () => import('#/views/sys/core/dictionary/index.vue'),
          },
        ],
      },
    ],
  },
];

export default routes;
