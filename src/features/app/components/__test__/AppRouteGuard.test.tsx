// Test
import { render, act } from '@testing-library/react'

// Redux
import { testRedux_renderWithProviders } from '@/plugins/redux/test.redux'
import { setupStore } from '@/plugins'
import { Provider } from 'react-redux'

// Components
import { AppRouteGuard } from '../AppRouteGuard'
import { AppEntryPoint } from '@/features/app/ui/AppEntryPoint'

// Slice
import { auth_login } from '@/features/auth/redux/auth.api'

// React Router DOM
import { MemoryRouter } from 'react-router-dom'

it('AppRouteGuard should render', async () => {
  await act(() => {
    testRedux_renderWithProviders(
      <AppRouteGuard>
        <AppEntryPoint />
      </AppRouteGuard>,
      { useRouting: true }
    )
  })
})

it('AppRouteGuard should have snapshot', async () => {
  await act(() => {
    const { container } = testRedux_renderWithProviders(
      <AppRouteGuard>
        <AppEntryPoint />
      </AppRouteGuard>,
      { useRouting: true }
    )

    expect(container.innerHTML).toMatchSnapshot()
  })
})

it('AppRouteGuard should render content if not authorized', async () => {
  const state = setupStore().getState()

  const route = '/auth/login'
  await act(() => {
    render(
      <MemoryRouter initialEntries={[route]}>
        <Provider store={setupStore()}>
          <AppRouteGuard>
            <AppEntryPoint />
          </AppRouteGuard>
        </Provider>
      </MemoryRouter>
    )
  })

  expect(state.auth.auth_token.token).toEqual(null)
})

it('AppRouteGuard should go to "/" if user already authenticated', async () => {
  const store = setupStore()

  await store
    .dispatch(auth_login({ email: 'john@gmail.com', password: 'password' }))
    .unwrap()

  const route = '/'
  await act(() => {
    render(
      <MemoryRouter initialEntries={[route]}>
        <Provider store={setupStore()}>
          <AppEntryPoint />
        </Provider>
      </MemoryRouter>
    )
  })

  expect(store.getState().auth.auth_token.token).not.toBeNull()
})
