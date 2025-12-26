import { eventHandler } from 'h3';
import { verifyAccessToken } from '~/utils/auth';
import { DictionaryDTO, MOCK_DICTIONARIES, PageDTO } from '~/utils/data';
import { unAuthorizedResponse, usePageResponseSuccess } from '~/utils/response';

export default eventHandler(async (event) => {
  const userinfo = verifyAccessToken(event);
  if (!userinfo) {
    return unAuthorizedResponse(event);
  }

  const pageDTO: PageDTO<DictionaryDTO> = await readBody(event);

  let records = MOCK_DICTIONARIES;
  if (pageDTO.query && pageDTO.query.name) {
    records = records.filter((item) => item.name.includes(pageDTO.query.name));
  }
  if (pageDTO.query && pageDTO.query.code) {
    records = records.filter((item) => item.code.includes(pageDTO.query.code));
  }
  if (pageDTO.query && pageDTO.query.type) {
    records = records.filter((item) => item.name === pageDTO.query.type);
  }
  return usePageResponseSuccess(
    pageDTO.pageIndex,
    pageDTO.pageSize,
    records.length,
    records,
  );
});
