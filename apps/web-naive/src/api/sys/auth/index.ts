import type { RouteRecordStringComponent } from '@vben/types';

import { baseRequestClient, requestClient } from '#/api/request';

/**
 * 登录
 */
export async function postAuthLogin(loginDTO: Sys.Auth.LoginDTO) {
  return requestClient.post<Sys.Auth.TokenVO>('/sys/auth/login', loginDTO);
}

/**
 * 退出登录
 */
export async function postAuthLogout() {
  return baseRequestClient.post('/sys/auth/logout', {
    withCredentials: true,
  });
}

export async function postAuthRefresh(refreshToken: null | string) {
  return requestClient.post<Sys.Auth.TokenVO>(
    '/sys/auth/refresh',
    {
      refreshToken,
    },
    {
      withCredentials: true,
    },
  );
}

/**
 * 获取用户
 */
export async function postAuthUser() {
  return requestClient.post<Sys.Auth.UserVO>('/sys/auth/user', {
    withCredentials: true,
  });
}

/**
 * 获取角色
 */
export async function postAuthRoles() {
  return requestClient.post<string[]>('/sys/auth/roles', {
    withCredentials: true,
  });
}

/**
 * 获取用户所有菜单
 */
export async function postAuthMenu() {
  return requestClient.post<RouteRecordStringComponent[]>('/sys/auth/menu');
}
