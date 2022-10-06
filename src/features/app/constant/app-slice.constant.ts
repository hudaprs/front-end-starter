// Interfaces
import { IAppSliceInitialState } from '@/features/app/interfaces/app-slice.interface'

// Constant
import { APP_LANGUAGE } from './app.constant'

export enum APP_SLICE_LOADING {
  BASE = 'isLoading',
  DETAIL = 'isDetailLoading',
  ACTION = 'isActionLoading',
  DOWNLOAD = 'isDownloadLoading'
}

export const APP_SLICE_INITIAL_STATE: IAppSliceInitialState = {
  app_isInitialized: false,
  app_isConnected: true,
  app_locale: APP_LANGUAGE.EN
}
