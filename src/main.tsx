// React
import React from 'react'
import ReactDOM from 'react-dom/client'

// Features - App
import { AppEntryPoint } from '@/features/app/ui'

// React Router DOM
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppEntryPoint />
    </BrowserRouter>
  </React.StrictMode>
)
