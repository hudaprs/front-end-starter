// Redux Toolkit
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Constant
import { APP_SLICE_INITIAL_STATE } from '@/features/app/constant/app-slice.constant'

const app = createSlice({
  name: 'app',
  initialState: APP_SLICE_INITIAL_STATE,
  reducers: {
    app_SET_INITIALIZED: (state, { payload }: PayloadAction<boolean>): void => {
      state.app_isInitialized = payload
    },
    app_SET_CONNECTED: (state, { payload }: PayloadAction<boolean>): void => {
      state.app_isConnected = payload
    }
  }
})

// Mutations
export const { app_SET_INITIALIZED, app_SET_CONNECTED } = app.actions

export default app.reducer
