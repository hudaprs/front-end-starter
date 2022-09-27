// Test
import { render } from '@testing-library/react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import 'jest-styled-components'

// Components
import { AppBaseLabel } from '../AppBaseLabel'

// Interfaces
import { IAppBaseLabelProps } from '../AppBaseLabel/interfaces'

// Constant
import { APP_COLOR } from '@/features/app/constant/app-style.constant'

const rendererInstance = (props?: IAppBaseLabelProps): ReactTestRenderer =>
  renderer.create(<AppBaseLabel {...props} />)

it('AppBaseLabel should render', () => {
  render(<AppBaseLabel />)
})

it('AppBaseLabel should have snapshot', () => {
  const tree = rendererInstance().toJSON()

  expect(tree).toMatchSnapshot()
})

it('AppBaseLabel should have default style', () => {
  const tree = rendererInstance().toJSON()

  expect(tree).toHaveStyleRule('font-size', '11px !important')
  expect(tree).toHaveStyleRule('font-weight', '400')
  expect(tree).toHaveStyleRule('color', APP_COLOR.DARK)
})

it('AppBaseLabel should correct props', () => {
  const tree = rendererInstance({
    fontSize: 16,
    fontWeight: 700,
    fontColor: APP_COLOR.WHITE
  }).toJSON()
  const secondTree = rendererInstance({ isBold: true }).toJSON()

  expect(tree).toHaveStyleRule('font-size', '16px !important')
  expect(tree).toHaveStyleRule('font-weight', '700')
  expect(tree).toHaveStyleRule('color', APP_COLOR.WHITE)
  expect(secondTree).toHaveStyleRule('font-weight', '700')
})
