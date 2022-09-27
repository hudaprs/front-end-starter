// Test
import { act, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import 'jest-styled-components'

// UI
import { AuthRegister } from '../AuthRegister'

// Plugins
import { testRedux_renderWithProviders } from '@/plugins/redux/test.redux'

// Constant
import { AUTH_SLICE_INITIAL_STATE } from '@/features/auth/constant/auth-slice.constant'

// React Router DOM
import { useNavigate } from 'react-router-dom'

it('AuthRegister should render', () => {
  testRedux_renderWithProviders(<AuthRegister />, {
    useRouting: true,
    preloadedState: {
      auth: {
        ...AUTH_SLICE_INITIAL_STATE,
        _persist: { version: 1, rehydrated: true }
      }
    }
  })
})

it('AuthRegister should have snapshot', () => {
  const { container } = testRedux_renderWithProviders(<AuthRegister />, {
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

it('AuthRegister onRedirectToLogin function should defined', async () => {
  await act(() => {
    testRedux_renderWithProviders(<AuthRegister />, {
      useRouting: true
    })
  })

  const user = userEvent.setup()

  await user.click(screen.getByTestId('login-button'))

  const navigate = useNavigate()

  expect(navigate).toHaveBeenCalled()
})

it('AuthRegister onSubmit function should defined', async () => {
  //
})
