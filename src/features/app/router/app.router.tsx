// React Lazily
import { lazily } from 'react-lazily'

// React Router DOM
import { RouteObject } from 'react-router-dom'

// Components
import { AppLayoutDefault } from '@/features/app/components'

// UI
const { App } = lazily(() => import('@/features/app/ui'))

const useAppRouter = (): RouteObject[] => {
  return [
    {
      path: '/',
      element: <AppLayoutDefault />,
      children: [
        {
          path: '',
          element: <App />
        }
      ]
    }
  ]
}

export { useAppRouter }
