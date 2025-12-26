import type { EventHandlerRequest, H3Event } from 'h3';

import { setResponseStatus } from 'h3';

export function useResponseSuccess<T = any>(data: T) {
  return {
    code: '00000000',
    data,
    message: 'ok',
  };
}

export function usePageResponseSuccess<T = any>(
  pageIndex: number,
  pageSize: number,
  total: number,
  records: T[],
) {
  const pageData = pagination(pageIndex, pageSize, records);

  return useResponseSuccess({
    pageIndex,
    pageSize,
    records: pageData,
    total,
  });
}

export function useResponseError(message: string) {
  return {
    code: -1,
    data: null,
    message,
  };
}

export function forbiddenResponse(
  event: H3Event<EventHandlerRequest>,
  message = 'Forbidden Exception',
) {
  setResponseStatus(event, 403);
  return useResponseError(message);
}

export function unAuthorizedResponse(event: H3Event<EventHandlerRequest>) {
  setResponseStatus(event, 401);
  return useResponseError('Unauthorized Exception');
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function pagination<T = any>(
  pageIndex: number,
  pageSize: number,
  array: T[],
): T[] {
  const offset = (pageIndex - 1) * Number(pageSize);
  return offset + Number(pageSize) >= array.length
    ? array.slice(offset)
    : array.slice(offset, offset + Number(pageSize));
}
