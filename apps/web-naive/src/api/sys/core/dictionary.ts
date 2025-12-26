import { requestClient } from '#/api/request';

/**
 * 数据字典 - 分页查询
 */
export async function pageCoreDictionary(
  pageDTO: PageDTO<Sys.Core.DictionaryDTO>,
) {
  return requestClient.post<PageVO<Sys.Core.DictionaryVO>>(
    '/sys/core/dictionary/paginate',
    pageDTO,
    {
      withCredentials: true,
    },
  );
}
