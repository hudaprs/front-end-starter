// React Lazily
import { AppRouteGuard } from '@/features/app/components'
import { lazily } from 'react-lazily'

// React Router DOM
import { RouteObject } from 'react-router-dom'

// UI
const { TodoIndex } = lazily(() => import('@/features/todo/ui'))

const useTodoRouter = (): RouteObject[] => {
  return [
    {
      path: 'todo',
      children: [
        {
          path: '',
          element: (
            <AppRouteGuard>
              <TodoIndex />
            </AppRouteGuard>
          )
        }
      ]
    }
  ]
}

export { useTodoRouter }
