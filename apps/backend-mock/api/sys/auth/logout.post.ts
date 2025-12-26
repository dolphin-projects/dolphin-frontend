import { defineEventHandler } from 'h3';
import { useResponseSuccess } from '~/utils/response';

export default defineEventHandler(async (_) => {
  return useResponseSuccess('');
});
