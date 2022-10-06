// React Router DOM
import { useRoutes } from 'react-router-dom'

// UI
import { AppNotFound } from '@/features/app/ui'

// Components
import { AppLayoutAuth, AppLayoutBackOffice } from '@/features/app/components'

// Routes General
import { useAppRouter } from '@/features/app/router/app.router'

// Routes Auth
import { useAuthRouter } from '@/features/auth/router/auth.router'

// Routes Back Office
import { useTodoRouter } from '@/features/todo/router/todo.router'
import { useDashboardRouter } from '@/features/dashboard/router/dashboard.router'

const useRouter = () => {
  // Router
  const app = useAppRouter()
  const auth = useAuthRouter()
  const todo = useTodoRouter()
  const dashboard = useDashboardRouter()

  const routes = useRoutes([
    ...app,
    {
      path: 'auth',
      element: <AppLayoutAuth />,
      children: [...auth]
    },
    {
      path: 'back-office',
      element: <AppLayoutBackOffice />,
      children: [...dashboard, ...todo]
    },
    { path: '*', element: <AppNotFound /> }
  ])

  return routes
}

export { useRouter }
