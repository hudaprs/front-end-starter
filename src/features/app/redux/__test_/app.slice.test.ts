// Slice
import reducer, { app_SET_CONNECTED, app_SET_INITIALIZED } from '../app.slice'

// Constant
import { APP_SLICE_INITIAL_STATE } from '@/features/app/constant/app-slice.constant'

it('App slice should return initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual(
    APP_SLICE_INITIAL_STATE
  )
})

it('App slice should handle initialized state', () => {
  expect(
    reducer(
      {
        ...APP_SLICE_INITIAL_STATE
      },
      app_SET_INITIALIZED(true)
    )
  ).toEqual({
    ...APP_SLICE_INITIAL_STATE,
    app_isInitialized: true
  })
})

it('App slice should handle connected state', () => {
  expect(
    reducer(
      {
        ...APP_SLICE_INITIAL_STATE
      },
      app_SET_CONNECTED(true)
    )
  ).toEqual({
    ...APP_SLICE_INITIAL_STATE,
    app_isConnected: true
  })
})
