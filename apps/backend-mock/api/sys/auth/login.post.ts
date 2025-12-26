import { defineEventHandler, readBody, setResponseStatus } from 'h3';
import { generateAccessToken, generateRefreshToken } from '~/utils/auth';
import { MOCK_USERS } from '~/utils/data';
import {
  forbiddenResponse,
  useResponseError,
  useResponseSuccess,
} from '~/utils/response';

export default defineEventHandler(async (event) => {
  const { password, username } = await readBody(event);
  if (!password || !username) {
    setResponseStatus(event, 400);
    return useResponseError(
      'BadRequestException',
      'Username and password are required',
    );
  }

  const userInfo = MOCK_USERS.find(
    (item) => item.username === username && item.password === password,
  );
  if (!userInfo) {
    return forbiddenResponse(event, 'Username or password is incorrect.');
  }

  const accessToken = generateAccessToken(userInfo);
  const refreshToken = generateRefreshToken(userInfo);
  return useResponseSuccess({
    accessToken,
    refreshToken,
  });
});
