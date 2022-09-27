// Test
import { render, screen } from '@testing-library/react'

// Components
import { LayoutEmpty } from '../LayoutEmpty'

it('LayoutEmpty should be rendered', () => {
  const { container } = render(
    <LayoutEmpty>
      <h1 data-testid='content'>Content</h1>
    </LayoutEmpty>
  )
  const element = screen.getByTestId('content')
  expect(container.innerHTML).toMatchSnapshot()
  expect(element.textContent).toBe('Content')
})
