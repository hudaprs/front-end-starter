// Test
import renderer from 'react-test-renderer'
import { ReactTestRenderer } from 'react-test-renderer'
import 'jest-styled-components'

// Components
import { StyledWrapper } from '../Styled'

const instanceStyledWrapper = (): ReactTestRenderer =>
  renderer.create(<StyledWrapper />)

it('StyledWrapper should render', () => {
  const tree = instanceStyledWrapper().toJSON()

  expect(tree).toHaveStyleRule('display', 'flex')
  expect(tree).toHaveStyleRule('align-items', 'center')
  expect(tree).toHaveStyleRule('justify-content', 'space-between')
  expect(tree).toHaveStyleRule('margin-top', '20px')
  expect(tree).toHaveStyleRule('gap', '20px')
  expect(tree).toHaveStyleRule('justify-content', 'space-evenly', {
    media: '(max-width: 1024px)'
  })
})
