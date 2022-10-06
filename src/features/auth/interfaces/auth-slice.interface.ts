// Interfaces
import { IAuthToken, IAuthAuthenticatedUser } from './auth.interface'

export interface IAuthSliceInitialState {
  auth_token: IAuthToken
  auth_authenticatedUser: IAuthAuthenticatedUser
}
