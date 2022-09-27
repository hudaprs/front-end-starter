// Test
import { render } from '@testing-library/react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import 'jest-styled-components'

// Components
import { AppBaseButton } from '../AppBaseButton'

// Interfaces
import { IAppBaseButtonProps } from '../AppBaseButton/interfaces'

// Constant
import {
  APP_COLOR,
  APP_COLOR_LIGHT
} from '@/features/app/constant/app-style.constant'

const rendererInstance = (props?: IAppBaseButtonProps): ReactTestRenderer =>
  renderer.create(<AppBaseButton {...props} />)

it('AppBaseButton should render', () => {
  render(<AppBaseButton />)
})

it('AppBaseButton should have snapshot', () => {
  const tree = rendererInstance().toJSON()
  expect(tree).toMatchSnapshot()
})

it('AppBaseButton should have default style', () => {
  const tree = rendererInstance().toJSON()

  expect(tree).toHaveStyleRule('border-radius', '10px')
  expect(tree).toHaveStyleRule('font-weight', '500px')
  expect(tree).toHaveStyleRule('font-size', '16px')
  expect(tree).toHaveStyleRule('border', 'none')
  expect(tree).toHaveStyleRule('line-height', '21px')
  expect(tree).toHaveStyleRule('display', 'flex')
  expect(tree).toHaveStyleRule('align-items', 'center')
  expect(tree).toHaveStyleRule('justify-content', 'center')
  expect(tree).toHaveStyleRule('gap', '8px')
})

it('AppBaseButton should render correct props', () => {
  const tree = rendererInstance({
    backgroundColor: APP_COLOR_LIGHT.BACKGROUND,
    fontColor: APP_COLOR.DARK,
    width: 300,
    height: 500
  }).toJSON()

  expect(tree).toHaveStyleRule('background-color', APP_COLOR_LIGHT.BACKGROUND)
  expect(tree).toHaveStyleRule('color', APP_COLOR.DARK)
  expect(tree).toHaveStyleRule('width', '300px')
  expect(tree).toHaveStyleRule('height', '500px')
})
