import { baseRequestClient } from '#/api/request';

/**
 * 退出登录
 */
export async function pageCoreDictionary(
  pageDTO: PageDTO<Sys.Core.DictionaryDTO>,
) {
  return baseRequestClient.post<PageVO<Sys.Core.DictionaryVO>>(
    '/auth/logout',
    pageDTO,
    {
      withCredentials: true,
    },
  );
}
