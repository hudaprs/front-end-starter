// React
import { Suspense } from 'react'

// Router
import { useRouter } from '@/plugins'

// Redux
import { Provider } from 'react-redux'
import { store } from '@/plugins/redux'

// Styled Components (Global Styles)
import { AppBaseGlobalStyle } from '@/features/app/components'

// i18n
import '@/plugins/i18n'

// Tailwind
import '@/assets/styles/tailwind.css'

// Antd
import '@/assets/styles/antd.less'

const AppEntryPoint = () => {
  // Hook
  const routes = useRouter()

  return (
    <>
      {/* Global Styles */}
      <AppBaseGlobalStyle />

      {/* Redux, Persist, and Router */}
      <Provider store={store}>
        <Suspense fallback={'Loading...'}>{routes}</Suspense>
      </Provider>
    </>
  )
}

export { AppEntryPoint }
