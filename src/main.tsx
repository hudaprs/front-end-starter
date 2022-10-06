// React
import React from 'react'
import ReactDOM from 'react-dom/client'

// Features - App
import { AppEntryPoint } from '@/features/app/ui'

// React Router DOM
import { BrowserRouter } from 'react-router-dom'

// Redux
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from '@/plugins/redux'

// Styled Components (Global Styles)
import { AppBaseGlobalStyle } from '@/features/app/components'

// i18n
import '@/plugins/i18n'

// Tailwind
import '@/assets/styles/tailwind.css'

// Antd
import '@/assets/styles/antd.less'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppBaseGlobalStyle />
      {/* Redux, Persist, and Router */}
      <Provider store={store}>
        <PersistGate loading={'Redux Loading...'} persistor={persistor}>
          <AppEntryPoint />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
