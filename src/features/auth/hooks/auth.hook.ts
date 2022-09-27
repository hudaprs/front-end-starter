// Selector
import { useAppSelector } from '@/features/app/hooks/app.hook'

// Api
import {
  auth_login,
  auth_register,
  auth_resetPassword,
  auth_logout
} from '@/features/auth/redux/auth.api'

const useAuth = () => {
  const auth_isLoading = useAppSelector(
    state => state.auth.auth_loading.isLoading
  )
  const auth_isActionLoading = useAppSelector(
    state => state.auth.auth_loading.isActionLoading
  )
  const auth_token = useAppSelector(state => state.auth.auth_token.token)
  const auth_refreshToken = useAppSelector(
    state => state.auth.auth_token.refreshToken
  )

  return {
    auth_isLoading,
    auth_isActionLoading,
    auth_token,
    auth_refreshToken,
    auth_login,
    auth_register,
    auth_resetPassword,
    auth_logout
  }
}

export { useAuth }
