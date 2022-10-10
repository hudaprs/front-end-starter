// React
import { useMemo } from 'react'

// Custom Hooks
import { useAppSelector } from '@/features/app/hooks/app.hook'

// Mutations
import {
  auth_SET_AUTHENTICATED_USER,
  auth_SET_TOKEN,
  auth_LOGOUT
} from '@/features/auth/redux/auth.slice'

// Rtk
import {
  useAuth_loginMutation,
  useAuth_registerMutation,
  useLazyAuth_meQuery
} from '@/features/auth/redux/auth.rtk'

const useAuth = () => {
  // Hook
  const auth_token = useAppSelector(state => state.auth.auth_token.token)
  const auth_refreshToken = useAppSelector(
    state => state.auth.auth_token.refreshToken
  )
  const auth_authenticatedUserId = useAppSelector(
    state => state.auth.auth_authenticatedUser.id
  )
  const auth_authenticatedUserName = useAppSelector(
    state => state.auth.auth_authenticatedUser.name
  )
  const auth_authenticatedUserEmail = useAppSelector(
    state => state.auth.auth_authenticatedUser.email
  )
  const auth_isAuthenticated = useMemo((): boolean => {
    return Boolean(auth_token && auth_refreshToken) || false
  }, [auth_token, auth_refreshToken])

  // Login
  const [auth_login, { isLoading: auth_isLoginLoading }] =
    useAuth_loginMutation()

  // Register
  const [auth_register, { isLoading: auth_isRegisterLoading }] =
    useAuth_registerMutation()

  // Get authenticated user
  const [
    auth_getAuthenticatedUser,
    { isLoading: auth_isGetAuthenticatedUserLoading }
  ] = useLazyAuth_meQuery()

  return {
    // State
    auth_token,
    auth_refreshToken,
    auth_authenticatedUserId,
    auth_authenticatedUserName,
    auth_authenticatedUserEmail,
    auth_isAuthenticated,

    // Mutation
    auth_SET_AUTHENTICATED_USER,
    auth_SET_TOKEN,
    auth_LOGOUT,

    // Rtk
    auth_login,
    auth_register,
    auth_getAuthenticatedUser,
    auth_isLoginLoading,
    auth_isRegisterLoading,
    auth_isGetAuthenticatedUserLoading
  }
}

export { useAuth }
