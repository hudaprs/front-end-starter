// Test
import renderer from 'react-test-renderer'
import 'jest-styled-components'

// Components
import { StyledWrapper } from '../Styled'

// Constant
import { APP_COLOR_LIGHT } from '@/features/app/constant/app-style.constant'

it('StyledWrapper should be rendered', () => {
  const tree = renderer.create(<StyledWrapper />).toJSON()

  expect(tree).toHaveStyleRule('width', '100vw')
  expect(tree).toHaveStyleRule('height', '100vh')
  expect(tree).toHaveStyleRule('background-color', APP_COLOR_LIGHT.BACKGROUND)
})
