// Test
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { ReactTestRenderer } from 'react-test-renderer'
import 'jest-styled-components'

// Components
import { AppBaseCheckbox } from '../AppBaseCheckbox'

// Interfaces
import { IAppBaseCheckboxProps } from '../AppBaseCheckbox/interfaces'

const rendererInstance = (props?: IAppBaseCheckboxProps): ReactTestRenderer =>
  renderer.create(<AppBaseCheckbox {...props} />)

it('AppBaseCheckbox should render', () => {
  render(<AppBaseCheckbox />)
})

it('AppBaseCheckbox should have snapshot', () => {
  const tree = rendererInstance().toJSON()

  expect(tree).toMatchSnapshot()
})
