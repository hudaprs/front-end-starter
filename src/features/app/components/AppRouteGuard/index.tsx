// React
import { memo, useMemo } from 'react'

// React Router DOM
import { useLocation, Navigate } from 'react-router-dom'

const AppRouteGuard = memo(({ children }: { children: JSX.Element }) => {
  // Hook
  const auth_token = false
  const location = useLocation()
  const isAuthRoute = useMemo(() => {
    return location.pathname.includes('auth')
  }, [location.pathname])

  // Check if user inside auth route and not authenticated
  if (isAuthRoute && !auth_token) {
    return children
  }

  // Check if user inside auth route and already authenticated
  if (isAuthRoute && auth_token) {
    return <Navigate to='/' state={{ from: location }} replace />
  }

  if (!auth_token) {
    // Redirect them to the /auth/login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to='/auth/login' state={{ from: location }} replace />
  }

  return children
})

AppRouteGuard.displayName = 'AppRouteGuard'

export { AppRouteGuard }
