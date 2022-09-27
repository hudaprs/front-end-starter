// Styled Components
import styled from 'styled-components'

// Antd
import { Checkbox } from 'antd'

// Interfaces
import { IAppBaseCheckboxProps } from './interfaces'

const AppBaseCheckbox = styled(Checkbox).attrs(
  (props): IAppBaseCheckboxProps => props
)<IAppBaseCheckboxProps>``

export { AppBaseCheckbox }
