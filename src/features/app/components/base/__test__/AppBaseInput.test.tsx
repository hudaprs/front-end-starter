// Test
import { render } from '@testing-library/react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import 'jest-styled-components'

// Components
import { AppBaseInput } from '../AppBaseInput'

// Interfaces
import { IAppBaseInputProps } from '@/features/app/components/base/AppBaseInput/interfaces'

// Constant
import {
  APP_COLOR,
  APP_COLOR_LIGHT
} from '@/features/app/constant/app-style.constant'

const rendererInstance = (props?: IAppBaseInputProps): ReactTestRenderer =>
  renderer.create(<AppBaseInput {...props} />)

const inputStyleOptions: jest.Options = {
  modifier: '&:not(.ant-input-status-error)'
}

it('AppBaseInput should render', () => {
  render(<AppBaseInput />)
})

it('AppBaseInput should have snapshot', () => {
  const tree = rendererInstance().toJSON()

  expect(tree).toMatchSnapshot()
})

it('AppBaseInput should have default style', () => {
  const tree = rendererInstance().toJSON()

  expect(tree).toHaveStyleRule('border', 'none', inputStyleOptions)
  expect(tree).toHaveStyleRule('background-color', APP_COLOR_LIGHT.BACKGROUND)
  expect(tree).toHaveStyleRule('height', '50px')
  expect(tree).toHaveStyleRule('width', '100%')
  expect(tree).toHaveStyleRule('border-radius', '10px')
  expect(tree).toHaveStyleRule('font-size', '14.22px')
  expect(tree).toHaveStyleRule('color', APP_COLOR.DARK)
})

it('AppBaseInput should render correct props', () => {
  const tree = rendererInstance({
    backgroundColor: APP_COLOR.DARK,
    width: 200,
    height: 100
  }).toJSON()

  expect(tree).toHaveStyleRule('background-color', APP_COLOR.DARK)
  expect(tree).toHaveStyleRule('width', '200px')
  expect(tree).toHaveStyleRule('height', '100px')
})
