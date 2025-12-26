export interface UserInfo {
  id: string;
  username: string;
  password: string;
  nickname: string;
}

// 用户信息
export const MOCK_USERS: Array<UserInfo> = [
  {
    id: '0686ca3eb4a24c0b832812e5c4558500',
    username: 'admin',
    password: '123456',
    nickname: '管理员',
  },
];

export const MOCK_CODES = [
  {
    // admin
    codes: ['admin'],
    username: 'admin',
  },
];

export const MOCK_MENUS = [
  {
    menus: [
      {
        meta: {
          order: -1,
          icon: 'carbon:workspace',
          title: 'page.dashboard.workspace',
        },
        name: 'Dashboard',
        path: '/dashboard',
        component: '/dashboard/workspace/index',
      },
      {
        meta: {
          order: 10,
          icon: 'carbon:data-base',
          title: '系统管理',
        },
        name: 'Sys',
        path: '/sys',
        children: [
          {
            meta: {
              order: 10,
              icon: 'carbon:data-base',
              title: '系统配置',
            },
            name: 'Core',
            path: '/core',
            children: [
              {
                meta: {
                  order: 10,
                  icon: 'carbon:data-base',
                  title: '数据字典',
                },
                name: 'Dictionary',
                path: '/dictionary',
                component: '/sys/core/dictionary/index',
              },
            ],
          },
        ],
      },
    ],
    username: 'admin',
  },
];
