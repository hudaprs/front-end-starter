// Test
import { render, screen, act } from '@testing-library/react'
import '@testing-library/jest-dom'

// UI
import { AppEntryPoint } from '../AppEntryPoint'

// React Router DOM
import { BrowserRouter, MemoryRouter } from 'react-router-dom'

const instance = () => render(<AppEntryPoint />, { wrapper: BrowserRouter })

it('AppEntryPoint should render', async () => {
  await act(() => {
    instance()
  })
})

it('AppEntryPoint should have snapshot', () => {
  const { container } = instance()

  expect(container.innerHTML).toMatchSnapshot()
})

it('AppEntryPoint full app rendering/navigating', async () => {
  await act(() => {
    instance()
  })

  // verify page content for default route
  expect(screen.getByText(/Hello World/i)).toBeInTheDocument()
})

it('AppEntryPoint landing on a bad page', () => {
  const badRoute = '/some/bad/route'

  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <AppEntryPoint />
    </MemoryRouter>
  )

  // verify navigation to "Not Found" route
  expect(screen.getByText(/Not Found/i)).toBeInTheDocument()
})
