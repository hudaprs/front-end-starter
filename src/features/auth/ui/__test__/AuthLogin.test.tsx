// Test
import { act, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import 'jest-styled-components'

// UI
import { AuthLogin } from '../AuthLogin'

// Plugins
import { testRedux_renderWithProviders } from '@/plugins/redux/test.redux'

// Constant
import { AUTH_SLICE_INITIAL_STATE } from '@/features/auth/constant/auth-slice.constant'

// React Router DOM
import { useNavigate } from 'react-router-dom'

it('AuthLogin should render', () => {
  testRedux_renderWithProviders(<AuthLogin />, {
    useRouting: true,
    preloadedState: {
      auth: {
        ...AUTH_SLICE_INITIAL_STATE,
        _persist: { version: 1, rehydrated: true }
      }
    }
  })
})

it('AuthLogin should have snapshot', () => {
  const { container } = testRedux_renderWithProviders(<AuthLogin />, {
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

it('AuthLogin onRedirectToRegister function should defined', async () => {
  await act(() => {
    testRedux_renderWithProviders(<AuthLogin />, {
      useRouting: true
    })
  })

  const user = userEvent.setup()

  await user.click(screen.getByTestId('register-button'))

  const navigate = useNavigate()

  expect(navigate).toHaveBeenCalled()
})

it('AuthLogin onRedirectToResetPassword function should defined', async () => {
  await act(() => {
    testRedux_renderWithProviders(<AuthLogin />, {
      useRouting: true
    })
  })

  const user = userEvent.setup()

  await user.click(screen.getByTestId('reset-password'))

  const navigate = useNavigate()

  expect(navigate).toHaveBeenCalled()
})

it('AuthLogin onSubmit function should defined', async () => {
  //
})
