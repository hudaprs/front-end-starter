// Antd
import { ButtonProps } from 'antd'

// Constant
import {
  APP_COLOR,
  APP_COLOR_LIGHT
} from '@/features/app/constant/app-style.constant'

export interface IAppBaseButtonProps extends ButtonProps {
  backgroundColor?: APP_COLOR | APP_COLOR_LIGHT
  fontColor?: APP_COLOR | APP_COLOR_LIGHT
  width?: number
  height?: number
}
