// Interfaces
import {
  IAuthResponseLogin,
  IAuthResponseAuthenticatedUser
} from '@/features/auth/interfaces/auth-response.interface'

export const AUTH_RESPONSE_LOGIN: IAuthResponseLogin = {
  token: 'asdf',
  refreshToken: 'asdf'
}

export const AUTH_RESPONSE_AUTHENTICATED_USER: IAuthResponseAuthenticatedUser =
  {
    id: 'asdf',
    name: 'John Doe',
    email: 'johndoe@gmail.com'
  }
