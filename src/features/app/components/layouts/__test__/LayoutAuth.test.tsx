// Test
import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

// Components
import { LayoutAuth } from '../LayoutAuth'

it('LayoutAuth should be rendered', () => {
  const { container } = render(
    <LayoutAuth>
      <h1 data-testid='content'>Content</h1>
    </LayoutAuth>
  )
  expect(container.innerHTML).toMatchSnapshot()
  expect(screen.getByTestId('content').textContent).toEqual('Content')
})

it('LayoutAuth should be have optional props isLogin', () => {
  render(
    <LayoutAuth data-testid='layout-auth' isLogin>
      <h1 data-testid='content'>Content</h1>
    </LayoutAuth>
  )
})

it('LayoutAuth left side should be have 2 content statically', () => {
  render(
    <LayoutAuth>
      <h1 data-testid='content'>Content</h1>
    </LayoutAuth>
  )
  const element = screen.getByTestId('auth-layout-left-side')
  expect(element.childElementCount).toEqual(2)
})

it('LayoutAuth left side should be have 1 content statically', () => {
  render(
    <LayoutAuth>
      <h1 data-testid='content'>Content</h1>
    </LayoutAuth>
  )
  const element = screen.getByTestId('auth-layout-right-side')
  expect(element.childElementCount).toEqual(1)
})
