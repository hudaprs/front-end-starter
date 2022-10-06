export interface IAuthToken {
  token: string | null
  refreshToken: string | null
}

export interface IAuthAuthenticatedUser {
  id: string | null
  name: string | null
  email: string | null
}

export interface IAuthLoginForm {
  email: string
  password: string
}

export interface IAuthRegisterForm {
  name: string
  email: string
  password: string
}
