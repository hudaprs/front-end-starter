// Interfaces
import { IAppSliceLoadingState } from '@/features/app/interfaces/app-slice.interface'

export interface IAuthToken {
  token: string | null
  refreshToken: string | null
}

export interface IAuthAuthenticatedUser {
  id: string | null
  name: string | null
  email: string | null
}

export interface IAuthSliceInitialState {
  auth_loading: IAppSliceLoadingState
  auth_token: IAuthToken
  auth_authenticatedUser: IAuthAuthenticatedUser
}
