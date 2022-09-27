// Interfaces
import { IAuthSliceInitialState } from '@/features/auth/interfaces/auth-slice.interface'

// Constant
import { APP_SLICE_INITIAL_LOADING } from '@/features/app/constant/app-slice.constant'

export const AUTH_SLICE_INITIAL_STATE: IAuthSliceInitialState = {
  auth_loading: APP_SLICE_INITIAL_LOADING,
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
