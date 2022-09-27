// Test
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

// UI
import { App } from '../App'

it('Component should render', () => {
  render(<App />)
  expect(screen.getByText('Hello World')).toBeInTheDocument()
})

it('Component should have snapshot', () => {
  const tree = renderer.create(<App />).toJSON()

  expect(tree).toMatchSnapshot()
})
