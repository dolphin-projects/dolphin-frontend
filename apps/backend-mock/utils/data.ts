export interface PageDTO<T> {
  pageIndex: number;
  pageSize: number;
  query?: T;
}

// ********** auth **********

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

// ********** core **********

// ********** 数据字典 **********

export interface DictionaryItemDTO {
  id: null | string;
  dictionaryId: null | string;
  parentId: null | string;
  name: null | string;
  code: null | string;
  sort: null | number;
  children: DictionaryItemDTO[] | null;
  description: null | string;
}

/** 数据字典- DTO */
export interface DictionaryDTO {
  id: null | string;
  name: null | string;
  code: null | string;
  type: null | string;
  items: DictionaryItemDTO[] | null;
  description: null | string;
}

export interface DictionaryItemVO {
  id: string;
  dictionaryId: string;
  parentId: null | string;
  name: string;
  code: string;
  sort: number;
  children: DictionaryItemVO[];
  description: null | string;
}

/** 数据字典 - VO */
export interface DictionaryVO {
  id: string;
  name: string;
  code: string;
  type: string;
  items: DictionaryItemVO[];
  description: null | string;
  createTime: string;
  updateTime: string;
}

export const MOCK_DICTIONARIES: DictionaryVO[] = [
  {
    id: '1',
    name: '通用-是否',
    code: 'common.yesno',
    type: 'enum',
    items: [],
    description: null,
    createTime: '2025-12-26 15:26:00',
    updateTime: '2025-12-26 15:26:00',
  },
  {
    id: '2',
    name: '表-数据字典-类型',
    code: 'table.sys_core_dictionary.type',
    type: 'enum',
    items: [],
    description: null,
    createTime: '2025-12-26 15:26:00',
    updateTime: '2025-12-26 15:26:00',
  },
];
