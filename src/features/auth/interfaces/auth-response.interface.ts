export interface IAuthResponseLogin {
  token: string
  refreshToken: string
}

export interface IAuthResponseAuthenticatedUser {
  id: string
  name: string
  email: string
}
