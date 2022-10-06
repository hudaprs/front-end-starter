// React Lazily
import { lazily } from 'react-lazily'

// React Router DOM
import { RouteObject } from 'react-router-dom'

// Components
import { AppRouteGuard } from '@/features/app/components'

// UI
const { DashboardIndex } = lazily(() => import('@/features/dashboard/ui'))

const useDashboardRouter = (): RouteObject[] => {
  return [
    {
      path: 'dashboard',
      children: [
        {
          path: '',
          element: (
            <AppRouteGuard>
              <DashboardIndex />
            </AppRouteGuard>
          )
        }
      ]
    }
  ]
}

export { useDashboardRouter }
