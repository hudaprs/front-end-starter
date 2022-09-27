// Styled Components
import styled from 'styled-components'

// Antd
import { Divider } from 'antd'

// Interfaces
import { IAppBaseDividerProps } from './interfaces'

const AppBaseDivider = styled(Divider).attrs(
  (props): IAppBaseDividerProps => props
)<IAppBaseDividerProps>`
  display: flex;
  align-items: center;
`

export { AppBaseDivider }
