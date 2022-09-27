// Test
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'

// Components
import { AppRouteWrapper } from '../AppRouteWrapper'

it('AppRouteWrapper should render', () => {
  render(<AppRouteWrapper />)
})

it('AppRouteWrapper should have snapshot', () => {
  const tree = renderer.create(<AppRouteWrapper />).toJSON()
  expect(tree).toMatchSnapshot()
})
