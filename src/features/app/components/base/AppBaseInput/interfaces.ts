// Interfaces
import { InputProps } from 'antd'

// Constant
import {
  APP_COLOR,
  APP_COLOR_LIGHT
} from '@/features/app/constant/app-style.constant'

export interface IAppBaseInputProps extends InputProps {
  backgroundColor?: APP_COLOR | APP_COLOR_LIGHT
  height?: number
  width?: number
}
