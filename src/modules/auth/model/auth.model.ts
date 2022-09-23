export type IAuthUserInfo = {
  fullname: string | null;
  role: number | null;
};

export type IAuthStore = {
  auth_isAuthenticated: boolean;
  auth_token: string | null;
  auth_userInfo: IAuthUserInfo | null;
  auth_loading: boolean;
};

export type IAuthForm = {
  username: string | null;
  password: string | null;
};
