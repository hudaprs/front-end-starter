// Test
import { render } from '@testing-library/react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import 'jest-styled-components'

// Components
import { AppBaseFormItem } from '../AppBaseFormItem'

// Interfaces
import { IAppBaseFormItemProps } from '../AppBaseFormItem/interfaces'

// Constant
import { APP_COLOR } from '@/features/app/constant/app-style.constant'

const rendererInstance = (props?: IAppBaseFormItemProps): ReactTestRenderer =>
  renderer.create(<AppBaseFormItem {...props} />)

const options: jest.Options = {
  modifier: '.ant-form-item-label label'
}

it('AppBaseFormItem should render', () => {
  render(<AppBaseFormItem />)
})

it('AppBaseFormItem should have snapshot', () => {
  const tree = rendererInstance().toJSON()

  expect(tree).toMatchSnapshot()
})

it('AppBaseFormItem should have default style', () => {
  const tree = rendererInstance().toJSON()

  expect(tree).toHaveStyleRule('line-height', '20.83px', options)
  expect(tree).toHaveStyleRule('font-weight', '500px', options)
  expect(tree).toHaveStyleRule('padding', '0px', options)
  expect(tree).toHaveStyleRule('color', APP_COLOR.DARK, options)
  expect(tree).toHaveStyleRule('font-size', '16px', options)
})

it('AppBaseFormItem should render correct props', () => {
  const tree = rendererInstance({
    labelColor: APP_COLOR.WHITE,
    labelSize: 20
  }).toJSON()

  expect(tree).toHaveStyleRule('color', APP_COLOR.WHITE, options)
  expect(tree).toHaveStyleRule('font-size', '20px', options)
})
