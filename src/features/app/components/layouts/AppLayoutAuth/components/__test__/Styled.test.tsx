// Test
import rendered from 'react-test-renderer'
import 'jest-styled-components'

// Components
import {
  StyledWrapper,
  StyledContainer,
  StyledFormContainer,
  StyledBanner
} from '../Styled'

it('StyleWrapper should be rendered', () => {
  const tree = rendered.create(<StyledWrapper />).toJSON()

  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('display', 'flex')
  expect(tree).toHaveStyleRule('align-items', 'center')
  expect(tree).toHaveStyleRule('height', '100vh')
  expect(tree).toHaveStyleRule('width', '100vw')
})

it('StyledContainer should be rendered', () => {
  const tree = rendered.create(<StyledContainer />).toJSON()

  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('display', 'flex')
  expect(tree).toHaveStyleRule('align-items', 'center')
  expect(tree).toHaveStyleRule('justify-content', 'center')
  expect(tree).toHaveStyleRule('height', '100%')
  expect(tree).toHaveStyleRule('width', '100%')
})

it('StyledFormContainer should be rendered', () => {
  const tree = rendered.create(<StyledFormContainer />).toJSON()

  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('width', '30vw')
  expect(tree).toHaveStyleRule('height', '100%')
  expect(tree).toHaveStyleRule('background-color', '#fff')
  expect(tree).toHaveStyleRule('display', 'flex')
  expect(tree).toHaveStyleRule('justify-content', 'center')
  expect(tree).toHaveStyleRule('flex-direction', 'column')
  expect(tree).toHaveStyleRule('padding', '0px 68px')
  expect(tree).toHaveStyleRule('width', '100vw', {
    media: '(max-width: 1024px)'
  })
  expect(tree).toHaveStyleRule('padding', '0px 30px', {
    media: '(max-width: 1024px)'
  })
})

it('StyledBanner should be rendered', () => {
  const tree = rendered.create(<StyledBanner />).toJSON()

  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('width', '70vw')
  expect(tree).toHaveStyleRule('height', '100%')
  expect(tree).toHaveStyleRule('background-color', '#f1f4fa')
  expect(tree).toHaveStyleRule('display', 'flex')
  expect(tree).toHaveStyleRule('align-items', 'center')
  expect(tree).toHaveStyleRule('justify-content', 'center')
  expect(tree).toHaveStyleRule('display', 'none', {
    media: '(max-width: 1024px)'
  })
})
