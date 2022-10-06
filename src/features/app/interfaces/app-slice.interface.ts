// Constant
import { APP_LANGUAGE } from '@/features/app/constant/app.constant'

export interface IAppSliceInitialState {
  app_isInitialized: boolean
  app_isConnected: boolean
  app_locale: APP_LANGUAGE
}
