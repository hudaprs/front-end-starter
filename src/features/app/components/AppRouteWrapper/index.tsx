// React
import { memo } from 'react'

// React Router DOM
import { Outlet } from 'react-router-dom'

const AppRouteWrapper = memo(() => {
  return <Outlet />
})

AppRouteWrapper.displayName = 'AppRouteWrapper'

export { AppRouteWrapper }
