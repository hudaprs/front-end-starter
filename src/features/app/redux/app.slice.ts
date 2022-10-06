// Redux Toolkit
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Constant
import { APP_SLICE_INITIAL_STATE } from '@/features/app/constant/app-slice.constant'
import { APP_LANGUAGE } from '@/features/app/constant/app.constant'

const app = createSlice({
  name: 'app',
  initialState: APP_SLICE_INITIAL_STATE,
  reducers: {
    app_SET_INITIALIZED: (state, { payload }: PayloadAction<boolean>): void => {
      state.app_isInitialized = payload
    },
    app_SET_CONNECTED: (state, { payload }: PayloadAction<boolean>): void => {
      state.app_isConnected = payload
    },
    app_SET_LANGUAGE: (
      state,
      { payload }: PayloadAction<APP_LANGUAGE>
    ): void => {
      state.app_locale = payload
    }
  }
})

// Mutations
export const { app_SET_INITIALIZED, app_SET_CONNECTED, app_SET_LANGUAGE } =
  app.actions

export default app.reducer
