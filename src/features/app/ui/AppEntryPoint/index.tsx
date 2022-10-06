// React
import { Suspense, useEffect } from 'react'

// Router
import { useRouter } from '@/plugins'

// Antd
import { ConfigProvider as AntdConfigProvider } from 'antd'

// Custom Hooks
import { useApp } from '@/features/app/hooks/app.hook'
import { useAuth } from '@/features/auth/hooks/auth.hook'

// Constant
import { APP_LANGUAGE_LIST } from '@/features/app/constant/app.constant'
import { validateMessages } from '@/features/app/constant/validation'

// i18n
import i18n from 'i18next'

// Moment
import moment from 'moment'
import 'moment/locale/id'

const AppEntryPoint = () => {
  // Hook
  const routes = useRouter()
  const { app_locale } = useApp()
  const { auth_token, auth_getAuthenticatedUser } = useAuth()

  // Trigger any change in locale
  useEffect(() => {
    moment.locale(app_locale)
    i18n.changeLanguage(app_locale)
  }, [app_locale])

  // Trigger auth when user already logged in
  useEffect(() => {
    if (auth_token) {
      auth_getAuthenticatedUser()
    }
  }, [auth_token, auth_getAuthenticatedUser])

  return (
    <AntdConfigProvider
      locale={APP_LANGUAGE_LIST[app_locale]}
      form={{ validateMessages: validateMessages[app_locale] }}
    >
      <Suspense fallback={'Loading...'}>{routes}</Suspense>
    </AntdConfigProvider>
  )
}

export { AppEntryPoint }
