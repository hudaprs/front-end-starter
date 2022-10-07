// React
import { memo, useState, createElement, useMemo, useCallback } from 'react'

// Components
import { AppRouteWrapper } from '@/features/app/components/AppRouteWrapper'
import {
  AppBaseLayout,
  AppBaseLayoutHeader,
  AppBaseLayoutSider,
  AppBaseLayoutContent,
  AppBaseMenu,
  AppBaseSelectOption
} from '@/features/app/components'

// Antd
import { MenuProps } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  EditOutlined,
  DashboardOutlined
} from '@ant-design/icons'

// i18n
import { useTranslation } from 'react-i18next'

// React Router DOM
import { useNavigate, useLocation } from 'react-router-dom'

// Custom Hooks
import { useAppDispatch } from '@/features/app/hooks/app.hook'

// Utils
import { notificationUtils_open } from '@/features/app/utils/notification.utils'

// Constant
import { APP_LANGUAGE } from '@/features/app/constant/app.constant'

// Custom Hooks
import { useApp } from '@/features/app/hooks/app.hook'
import { useAuth } from '@/features/auth/hooks/auth.hook'

const AppLayoutBackOffice = memo(() => {
  // Hook
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  const { app_locale, app_SET_LANGUAGE } = useApp()
  const { auth_LOGOUT } = useAuth()
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const menuItems = useMemo((): MenuProps['items'] => {
    return [
      {
        key: '/back-office/dashboard',
        icon: <DashboardOutlined />,
        label: t('app.menu.dashboard'),
        onClick: () => navigate('/back-office/dashboard')
      },
      {
        key: '/back-office/todo',
        icon: <EditOutlined />,
        label: t('app.menu.todo'),
        onClick: () => navigate('/back-office/todo')
      }
    ]
  }, [t, navigate])
  const selectedMenuItem = useMemo((): string | undefined => {
    return menuItems
      ?.find(menuItem => menuItem?.key?.toString()?.includes(location.pathname))
      ?.key?.toString()
  }, [location.pathname, menuItems])

  /**
   * @description Change language
   *
   * @param {APP_LANGUAGE} lang
   *
   * @return {Promise<void>} Promise<void>
   */
  const onChangeLanguage = useCallback(
    async (lang: APP_LANGUAGE): Promise<void> => {
      dispatch(app_SET_LANGUAGE(lang))
    },
    [dispatch, app_SET_LANGUAGE]
  )

  /**
   * @description Logout user
   *
   * @return {void} void
   */
  const onLogout = useCallback((): void => {
    dispatch(auth_LOGOUT())

    notificationUtils_open('success', {
      message: t('app.alert.logoutSuccess')
    })
  }, [dispatch, auth_LOGOUT, t])

  return (
    <AppBaseLayout style={{ display: 'flex', overflowX: 'auto' }}>
      {/* Sidebar */}
      <AppBaseLayoutSider
        trigger={null}
        collapsible
        collapsed={collapsed || undefined}
      >
        {/* Sidebar - Header */}
        <div className='flex items-center justify-center mt-4 mb-4'>
          <h1 className='text-white text-1xl'>
            React {!collapsed && 'Starter'}
          </h1>
        </div>

        {/* Sidebar - Items */}
        <AppBaseMenu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={[selectedMenuItem || '']}
          items={menuItems}
        />
      </AppBaseLayoutSider>
      <AppBaseLayout isContent collapsed={collapsed || undefined}>
        {/* Header */}
        <AppBaseLayoutHeader>
          <div className='flex items-center justify-between'>
            {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              onClick: () => setCollapsed(!collapsed),
              style: {
                fontSize: 24
              }
            })}

            <div className='flex items-center justify-between gap-10'>
              {/* Locale */}
              <div>
                <AppBaseSelectOption
                  options={Object.values(APP_LANGUAGE).map(lang => ({
                    label: t(`app.locale.${lang}`),
                    value: lang
                  }))}
                  value={app_locale}
                  style={{ width: 100 }}
                  onChange={value => onChangeLanguage(value as APP_LANGUAGE)}
                />
              </div>

              {/* Etc */}
              <div>
                <p className='cursor-pointer m-0' onClick={onLogout}>
                  {t('app.logout')}
                </p>
              </div>
            </div>
          </div>
        </AppBaseLayoutHeader>
        <AppBaseLayoutContent>
          <AppRouteWrapper />
        </AppBaseLayoutContent>
      </AppBaseLayout>
    </AppBaseLayout>
  )
})

AppLayoutBackOffice.displayName = 'AppLayoutBackOffice'

export { AppLayoutBackOffice }
