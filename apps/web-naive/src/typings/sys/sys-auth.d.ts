namespace Sys {
  declare namespace Auth {
    /** 登录接口参数 */
    interface LoginDTO {
      username?: string;
      password?: string;
    }
    /** 登录接口返回值 */
    interface TokenVO {
      accessToken: string;
      refreshToken: string;
    }
    /** 用户信息 */
    interface UserVO {
      id: string;
      username: string;
      nickname: string;
      homepath: string;
      roles: string[];
      description?: string;
      createTime: string;
      updateTime: string;
    }
  }
}
