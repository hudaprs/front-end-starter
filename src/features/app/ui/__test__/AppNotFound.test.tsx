// Test
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

// UI
import { AppNotFound } from '../AppNotFound'

it('AppNotFound should render', () => {
  render(<AppNotFound />)
})

it('AppNotFound should have snapshot', () => {
  const tree = renderer.create(<AppNotFound />).toJSON()

  expect(tree).toMatchSnapshot()
})

it('AppNotFound should have Not Found', () => {
  render(<AppNotFound />)
  expect(screen.getByText('Not Found')).toBeInTheDocument()
})
