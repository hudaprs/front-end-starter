// React
import { memo, useMemo } from 'react'

// Components
import {
  AppBaseLayout,
  AppBaseLayoutHeader,
  AppBaseMenu,
  AppBaseLayoutFooter,
  AppBaseLayoutContent,
  AppBaseBreadcrumb,
  AppBaseBreadcrumbItem,
  AppRouteWrapper,
  AppBaseDropdown
} from '@/features/app/components'

// i18n
import { useTranslation } from 'react-i18next'

// Antd
import { MenuProps } from 'antd'

// React Router DOM
import { useLocation, useNavigate } from 'react-router-dom'

// Custom Hooks
import { useAuth } from '@/features/auth/hooks/auth.hook'

const AppLayoutDefault = memo(() => {
  // Hook
  const location = useLocation()
  const navigate = useNavigate()
  const { auth_isAuthenticated } = useAuth()
  const { t } = useTranslation()
  const menuItems = useMemo((): MenuProps['items'] => {
    return [
      {
        key: '/',
        label: t('app.menu.dashboard'),
        onClick: () => navigate('/')
      }
    ]
  }, [t, navigate])
  const selectedMenuItem = useMemo((): string | undefined => {
    return menuItems
      ?.find(menuItem => menuItem?.key?.toString()?.includes(location.pathname))
      ?.key?.toString()
  }, [location.pathname, menuItems])

  return (
    <AppBaseLayout className='layout'>
      <AppBaseLayoutHeader style={{ padding: 0 }}>
        <div
          className='flex items-center justify-between bg-black'
          style={{
            paddingLeft: 40,
            paddingRight: 40
          }}
        >
          {/* Left Side */}
          <AppBaseMenu
            theme='dark'
            mode='horizontal'
            defaultSelectedKeys={[selectedMenuItem || '']}
            items={menuItems}
          />

          {/* Right Side */}
          {auth_isAuthenticated ? (
            <AppBaseDropdown
              label={t('app.menu.menu')}
              items={[
                {
                  key: '1',
                  label: t('app.menu.backOffice'),
                  onClick: () => navigate('/back-office/dashboard')
                }
              ]}
            />
          ) : (
            <div
              className='text-white cursor-pointer'
              onClick={() => navigate('/auth/login')}
            >
              Auth
            </div>
          )}
        </div>
      </AppBaseLayoutHeader>

      {/* Content */}
      <AppBaseLayoutContent style={{ padding: '0 50px', minHeight: '85vh' }}>
        {/* Breadcrumb */}
        <AppBaseBreadcrumb style={{ margin: '16px 0' }}>
          <AppBaseBreadcrumbItem>Home</AppBaseBreadcrumbItem>
          <AppBaseBreadcrumbItem>List</AppBaseBreadcrumbItem>
          <AppBaseBreadcrumbItem>App</AppBaseBreadcrumbItem>
        </AppBaseBreadcrumb>

        {/* Content Here */}
        <div className='site-layout-content'>
          <AppRouteWrapper />
        </div>
      </AppBaseLayoutContent>

      {/* Footer */}
      <AppBaseLayoutFooter style={{ textAlign: 'center' }}>
        Ant Design {new Date().getFullYear()} Created by Ant UED
      </AppBaseLayoutFooter>
    </AppBaseLayout>
  )
})

AppLayoutDefault.displayName = 'AppLayoutDefault'

export { AppLayoutDefault }
