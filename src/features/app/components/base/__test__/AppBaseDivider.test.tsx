// Test
import { render } from '@testing-library/react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import 'jest-styled-components'

// Components
import { AppBaseDivider } from '../AppBaseDivider'

// Interfaces
import { IAppBaseDividerProps } from '../AppBaseDivider/interfaces'

const rendererInstance = (props?: IAppBaseDividerProps): ReactTestRenderer =>
  renderer.create(<AppBaseDivider {...props} />)

it('AppBaseDivider should render', () => {
  render(<AppBaseDivider />)
})

it('AppBaseDivider should have snapshot', () => {
  const tree = rendererInstance().toJSON()

  expect(tree).toMatchSnapshot()
})

it('AppBaseDivider should have default style', () => {
  const tree = rendererInstance().toJSON()

  expect(tree).toHaveStyleRule('display', 'flex')
  expect(tree).toHaveStyleRule('align-items', 'center')
})
