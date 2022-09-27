// React
import { ReactElement } from 'react'

// Interfaces
import { DropdownProps, MenuProps } from 'antd'

export interface IDropdownProps {
  children?: ReactElement
  trigger?: DropdownProps['trigger']
  items: MenuProps['items']
}
