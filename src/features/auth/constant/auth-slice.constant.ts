// Interfaces
import { IAuthSliceInitialState } from '@/features/auth/interfaces/auth-slice.interface'

export const AUTH_SLICE_INITIAL_STATE: IAuthSliceInitialState = {
  auth_authenticatedUser: {
    id: null,
    name: null,
    email: null
  },
  auth_token: {
    token: null,
    refreshToken: null
  }
}
