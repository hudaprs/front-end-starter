// Test
import { render, screen } from '@testing-library/react'

// Components
import { AppLayoutEmpty } from '../AppAppLayoutEmpty'

it('AppLayoutEmpty should be rendered', () => {
  const { container } = render(
    <AppLayoutEmpty>
      <h1 data-testid='content'>Content</h1>
    </AppLayoutEmpty>
  )
  const element = screen.getByTestId('content')
  expect(container.innerHTML).toMatchSnapshot()
  expect(element.textContent).toBe('Content')
})
