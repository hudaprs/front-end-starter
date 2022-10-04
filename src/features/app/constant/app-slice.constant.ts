// Interfaces
import { IAppSliceInitialState } from '@/features/app/interfaces/app-slice.interface'

export enum APP_SLICE_LOADING {
  BASE = 'isLoading',
  DETAIL = 'isDetailLoading',
  ACTION = 'isActionLoading',
  DOWNLOAD = 'isDownloadLoading'
}

export const APP_SLICE_INITIAL_STATE: IAppSliceInitialState = {
  app_isInitialized: false,
  app_isConnected: true
}
