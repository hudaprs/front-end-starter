// React
import { lazily } from 'react-lazily'

// React Router DOM
import { RouteObject } from 'react-router-dom'

// Components
import { AppRouteGuard } from '@/features/app/components'

// UI
const { AuthLogin, AuthRegister, AuthResetPassword } = lazily(
  () => import('@/features/auth/ui')
)

const useAuthRouter = (): RouteObject[] => {
  return [
    {
      path: 'login',
      element: (
        <AppRouteGuard>
          <AuthLogin />
        </AppRouteGuard>
      )
    },
    {
      path: 'register',
      element: (
        <AppRouteGuard>
          <AuthRegister />
        </AppRouteGuard>
      )
    },
    {
      path: 'reset-password',
      element: (
        <AppRouteGuard>
          <AuthResetPassword />
        </AppRouteGuard>
      )
    }
  ]
}

export { useAuthRouter }
