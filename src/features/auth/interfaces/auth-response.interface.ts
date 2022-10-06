// Interfaces
import { IApiResponse } from '@/features/app/interfaces/app-api.interface'
import { IAuthToken, IAuthAuthenticatedUser } from './auth.interface'

export type IAuthResponseToken = IApiResponse<IAuthToken>
export type IAuthResponseAuthenticatedUser =
  IApiResponse<IAuthAuthenticatedUser>
