// Test
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

// Components
import { AppBaseSocialMediaButton } from '../AppBaseSocialMediaButton'

it('AppBaseSocialMediaButton should render', () => {
  render(<AppBaseSocialMediaButton />)
})

it('AppBaseSocialMediaButton should have snapshot', () => {
  const tree = renderer.create(<AppBaseSocialMediaButton />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('AppBaseSocialMediaButton should have google button and have 2 children', () => {
  render(<AppBaseSocialMediaButton />)
  const element = screen.getByTestId('google')
  expect(element.childElementCount).toEqual(2)
})

it('AppBaseSocialMediaButton should have facebook button and have 2 children', () => {
  render(<AppBaseSocialMediaButton />)
  const element = screen.getByTestId('facebook')
  expect(element.childElementCount).toEqual(2)
})
