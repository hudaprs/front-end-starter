// React Lazily
import { lazily } from 'react-lazily'

// React Router DOM
import { RouteObject } from 'react-router-dom'

// UI
const { TodoIndex } = lazily(() => import('@/features/todo/ui'))

const useTodoRouter = (): RouteObject[] => {
  return [
    {
      path: '/todo',
      element: <TodoIndex />
    }
  ]
}

export { useTodoRouter }
