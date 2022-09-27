// React Lazily
import { lazily } from 'react-lazily'

// React Router DOM
import { RouteObject } from 'react-router-dom'

// UI
const { App } = lazily(() => import('@/features/app/ui'))

const useAppRouter = (): RouteObject[] => {
  return [
    {
      path: '/',
      element: <App />
    }
  ]
}

export { useAppRouter }
