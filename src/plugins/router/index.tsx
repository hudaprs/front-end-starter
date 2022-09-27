// React Router DOM
import { useRoutes } from 'react-router-dom'

// Routes
import { useAppRouter } from '@/features/app/router/app.router'
import { useAuthRouter } from '@/features/auth/router/auth.router'
import { AppNotFound } from '@/features/app/ui'
import { useTodoRouter } from '@/features/todo/router/todo.router'

const useRouter = () => {
  // Router
  const app = useAppRouter()
  const auth = useAuthRouter()
  const todo = useTodoRouter()

  const routes = useRoutes([
    ...app,
    ...auth,
    ...todo,
    { path: '*', element: <AppNotFound /> }
  ])

  return routes
}

export { useRouter }
