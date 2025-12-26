/**
 * 分页请求
 */
interface PageDTO<T> {
  pageIndex: number;
  pageSize: number;
  query?: T;
}

interface PageVO<T> {
  pageIndex: number;
  pageSize: number;
  total: number;
  records: T[];
}
