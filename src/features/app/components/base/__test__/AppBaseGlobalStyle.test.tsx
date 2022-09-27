// React
import { render } from '@testing-library/react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import 'jest-styled-components'

// Components
import { AppBaseGlobalStyle } from '../AppBaseGlobalStyle'

const rendererInstance = (): ReactTestRenderer =>
  renderer.create(<AppBaseGlobalStyle />)

it('AppBaseGlobalStyle should render', () => {
  render(<AppBaseGlobalStyle />)
})

it('AppBaseGlobalStyle should match snapshot', () => {
  const tree = rendererInstance().toJSON()

  expect(tree).toMatchSnapshot()
})
