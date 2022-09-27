// Redux Toolkit
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Interfaces
import { IAppSliceInitialState } from '@/features/app/interfaces/app-slice.interface'

// Constant
import { APP_SLICE_INITIAL_STATE } from '@/features/app/constant/app-slice.constant'

const initialState: IAppSliceInitialState = APP_SLICE_INITIAL_STATE

const app = createSlice({
  name: 'app',
  initialState,
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
