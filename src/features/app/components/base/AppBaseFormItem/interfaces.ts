// Interfaces
import { FormItemProps } from 'antd'

// Constant
import {
  APP_COLOR,
  APP_COLOR_LIGHT
} from '@/features/app/constant/app-style.constant'

export interface IAppBaseFormItemProps extends FormItemProps {
  labelColor?: APP_COLOR | APP_COLOR_LIGHT
  labelSize?: number
}
