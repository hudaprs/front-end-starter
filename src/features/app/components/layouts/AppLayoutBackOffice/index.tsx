// React
import { memo, useState, createElement, useMemo } from 'react'

// Components
import { AppRouteWrapper } from '@/features/app/components/AppRouteWrapper'
import {
  AppBaseLayout,
  AppBaseLayoutHeader,
  AppBaseLayoutSider,
  AppBaseLayoutContent,
  AppBaseMenu
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
import { useNavigate } from 'react-router-dom'

const AppLayoutBackOffice = memo(() => {
  // Hook
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const menuItems = useMemo((): MenuProps['items'] => {
    return [
      {
        key: '1',
        icon: <DashboardOutlined />,
        label: t('app.menu.dashboard'),
        onClick: () => navigate('/back-office/todo')
      },
      {
        key: '2',
        icon: <EditOutlined />,
        label: t('app.menu.todo'),
        onClick: () => navigate('/back-office/todo')
      }
    ]
  }, [t, navigate])

  return (
    <AppBaseLayout style={{ display: 'flex', overflowX: 'auto' }}>
      {/* Sidebar */}
      <AppBaseLayoutSider trigger={null} collapsible collapsed={collapsed}>
        {/* Sidebar - Header */}
        <div className='flex items-center justify-center mt-4'>
          <h1 className='text-white text-1xl'>
            React {!collapsed && 'Starter'}
          </h1>
        </div>

        {/* Sidebar - Items */}
        <AppBaseMenu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['1']}
          items={menuItems}
        />
      </AppBaseLayoutSider>
      <AppBaseLayout content collapsed={collapsed}>
        <AppBaseLayoutHeader>
          {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            onClick: () => setCollapsed(!collapsed),
            style: {
              fontSize: 24
            }
          })}
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
