// Constant
import {
  APP_COLOR,
  APP_COLOR_LIGHT
} from '@/features/app/constant/app-style.constant'

export interface IAppBaseLabelProps {
  fontWeight?: number
  fontSize?: number
  isBold?: boolean
  fontColor?: APP_COLOR | APP_COLOR_LIGHT
}
