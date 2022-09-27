// React
import { lazily } from 'react-lazily'

// React Router DOM
import { RouteObject } from 'react-router-dom'

// Components
import {
  AppRouteGuard,
  AppRouteWrapper,
  LayoutEmpty,
  LayoutAuth
} from '@/features/app/components'

// UI
const { AuthLogin, AuthRegister, AuthResetPassword } = lazily(
  () => import('@/features/auth/ui')
)

const useAuthRouter = (): RouteObject[] => {
  return [
    {
      path: 'auth',
      element: <AppRouteWrapper />,
      children: [
        {
          path: 'login',
          element: (
            <AppRouteGuard>
              <LayoutAuth isLogin>
                <AuthLogin />
              </LayoutAuth>
            </AppRouteGuard>
          )
        },
        {
          path: 'register',
          element: (
            <AppRouteGuard>
              <LayoutAuth isLogin={false}>
                <AuthRegister />
              </LayoutAuth>
            </AppRouteGuard>
          )
        },
        {
          path: 'reset-password',
          element: (
            <AppRouteGuard>
              <LayoutEmpty>
                <AuthResetPassword />
              </LayoutEmpty>
            </AppRouteGuard>
          )
        }
      ]
    }
  ]
}

export { useAuthRouter }
