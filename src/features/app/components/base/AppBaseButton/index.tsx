// Styled Components
import styled from 'styled-components'

// Antd
import { Button } from 'antd'

// Interfaces
import { IAppBaseButtonProps } from './interfaces'

// Lodash
import omit from 'lodash.omit'

const AppBaseButton = styled((props: IAppBaseButtonProps) => (
  <Button
    {...omit<IAppBaseButtonProps>(props, [
      'backgroundColor',
      'fontColor',
      'width',
      'height'
    ])}
  />
))`
  background-color: ${props =>
    !props?.type && props?.backgroundColor
      ? props?.backgroundColor
      : undefined};
  color: ${props =>
    !props?.type && props?.fontColor ? props?.fontColor : undefined};
  width: ${props => (props?.width ? `${props.width}px` : 'auto')};
  height: ${props => (props?.height ? `${props.height}px` : 'auto')};
  border-radius: 10px;
  font-weight: 500px;
  font-size: 16px;
  border: none;
  line-height: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

export { AppBaseButton }
