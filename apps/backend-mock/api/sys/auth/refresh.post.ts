import { defineEventHandler, readBody } from 'h3';
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from '~/utils/auth';
import { MOCK_USERS } from '~/utils/data';
import { forbiddenResponse } from '~/utils/response';

export default defineEventHandler(async (event) => {
  const { oldRefreshToken } = await readBody(event);
  if (!oldRefreshToken) {
    return forbiddenResponse(event);
  }
  const userInfo = verifyRefreshToken(oldRefreshToken);
  if (!userInfo) {
    return forbiddenResponse(event);
  }

  const findUser = MOCK_USERS.find(
    (item) => item.username === userInfo.username,
  );
  if (!findUser) {
    return forbiddenResponse(event);
  }
  const accessToken = generateAccessToken(findUser);
  const refreshToken = generateRefreshToken(findUser);
  return {
    accessToken,
    refreshToken,
  };
});
