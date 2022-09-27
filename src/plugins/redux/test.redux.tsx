// React
import { ReactElement } from 'react'

// Test
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'

// Redux
import type { PreloadedState } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

// Root Store
import { TRootState, TAppStore, setupStore } from './'
import { BrowserRouter } from 'react-router-dom'

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<TRootState>
  store?: TAppStore
  useRouting?: boolean
}

const renderWrapper = (payload: {
  store?: TAppStore
  useRouting?: boolean
  content?: ReactElement
}): ReactElement => {
  if (payload.store) {
    if (payload?.useRouting) {
      return (
        <BrowserRouter>
          <Provider store={payload.store}>{payload?.content}</Provider>
        </BrowserRouter>
      )
    } else {
      return <Provider store={payload.store}>{payload?.content}</Provider>
    }
  } else {
    return <div>{payload?.content}</div>
  }
}

export const testRedux_renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  return {
    ...render(renderWrapper({ ...renderOptions, content: ui, store }), {
      ...renderOptions
    })
  }
}
