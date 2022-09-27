// Test
import { act, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import 'jest-styled-components'

// UI
import { AuthResetPassword } from '../AuthResetPassword'

// Plugins
import { testRedux_renderWithProviders } from '@/plugins/redux/test.redux'

// Constant
import { AUTH_SLICE_INITIAL_STATE } from '@/features/auth/constant/auth-slice.constant'

// React Router DOM
import { useNavigate } from 'react-router-dom'

it('AuthResetPassword should render', () => {
  testRedux_renderWithProviders(<AuthResetPassword />, {
    useRouting: true,
    preloadedState: {
      auth: {
        ...AUTH_SLICE_INITIAL_STATE,
        _persist: { version: 1, rehydrated: true }
      }
    }
  })
})

it('AuthResetPassword should have snapshot', () => {
  const { container } = testRedux_renderWithProviders(<AuthResetPassword />, {
    useRouting: true,
    preloadedState: {
      auth: {
        ...AUTH_SLICE_INITIAL_STATE,
        _persist: { version: 1, rehydrated: true }
      }
    }
  })

  expect(container.innerHTML).toMatchSnapshot()
})

it('AuthResetPassword onRedirectToLogin function should defined', async () => {
  await act(() => {
    testRedux_renderWithProviders(<AuthResetPassword />, {
      useRouting: true
    })
  })

  const user = userEvent.setup()

  await user.click(screen.getByTestId('login-button'))

  const navigate = useNavigate()

  expect(navigate).toHaveBeenCalled()
})

it('AuthResetPassword onSubmit function should defined', async () => {
  //
})
