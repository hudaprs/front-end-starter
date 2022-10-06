// Custom Hooks
import { useAppSelector } from '@/features/app/hooks/app.hook'

const useAuth = () => {
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

  return {
    auth_token,
    auth_refreshToken,
    auth_authenticatedUserId,
    auth_authenticatedUserName,
    auth_authenticatedUserEmail
  }
}

export { useAuth }
