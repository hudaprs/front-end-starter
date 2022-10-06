// Test
import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

// Components
import { AppLayoutAuth } from '../AppLayoutAuth'

it('AppLayoutAuth should be rendered', () => {
  const { container } = render(
    <AppLayoutAuth>
      <h1 data-testid='content'>Content</h1>
    </AppLayoutAuth>
  )
  expect(container.innerHTML).toMatchSnapshot()
  expect(screen.getByTestId('content').textContent).toEqual('Content')
})

it('AppLayoutAuth should be have optional props isLogin', () => {
  render(
    <AppLayoutAuth data-testid='layout-auth' isLogin>
      <h1 data-testid='content'>Content</h1>
    </AppLayoutAuth>
  )
})

it('AppLayoutAuth left side should be have 2 content statically', () => {
  render(
    <AppLayoutAuth>
      <h1 data-testid='content'>Content</h1>
    </AppLayoutAuth>
  )
  const element = screen.getByTestId('auth-layout-left-side')
  expect(element.childElementCount).toEqual(2)
})

it('AppLayoutAuth left side should be have 1 content statically', () => {
  render(
    <AppLayoutAuth>
      <h1 data-testid='content'>Content</h1>
    </AppLayoutAuth>
  )
  const element = screen.getByTestId('auth-layout-right-side')
  expect(element.childElementCount).toEqual(1)
})
