// Test
import renderer from 'react-test-renderer'
import 'jest-styled-components'

// Components
import { StyledWrapper, StyledCard } from '../Styled'

// Constant
import {
  APP_COLOR,
  APP_COLOR_LIGHT
} from '@/features/app/constant/app-style.constant'

it('StyledWrapper should be rendered', () => {
  renderer.create(<StyledWrapper />).toJSON()
})

it('StyledWrapper should have snapshot', () => {
  const tree = renderer.create(<StyledWrapper />).toJSON()

  expect(tree).toMatchSnapshot()
})

it('StyledWrapper should have default style', () => {
  const tree = renderer.create(<StyledWrapper />).toJSON()

  expect(tree).toHaveStyleRule('height', '100%')
  expect(tree).toHaveStyleRule('display', 'flex')
  expect(tree).toHaveStyleRule('align-items', 'center')
  expect(tree).toHaveStyleRule('justify-content', 'center')
  expect(tree).toHaveStyleRule('flex-direction', 'column')
})

it('StyledCard should be rendered', () => {
  renderer.create(<StyledCard />).toJSON()
})

it('StyledCard should have snapshot', () => {
  const tree = renderer.create(<StyledCard />).toJSON()

  expect(tree).toMatchSnapshot()
})

it('StyledCard should have default style', () => {
  const tree = renderer.create(<StyledCard />).toJSON()

  expect(tree).toHaveStyleRule('background-color', APP_COLOR.WHITE)
  expect(tree).toHaveStyleRule('width', '658px')
  expect(tree).toHaveStyleRule('height', '658px')
  expect(tree).toHaveStyleRule('justify-content', 'inherit')
  expect(tree).toHaveStyleRule('flex-direction', 'inherit')
  expect(tree).toHaveStyleRule('border-radius', '10px')
  expect(tree).toHaveStyleRule('padding', '0px 80px')
})
