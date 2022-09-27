// Slice
import reducer, { auth_SET_LOADING } from '../auth.slice'

// Constant
import { AUTH_SLICE_INITIAL_STATE } from '@/features/auth/constant/auth-slice.constant'
import { APP_SLICE_LOADING } from '@/features/app/constant/app-slice.constant'

it('Auth slice should return initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual(
    AUTH_SLICE_INITIAL_STATE
  )
})

it('Auth slice should handle loading state', () => {
  expect(
    reducer(
      {
        ...AUTH_SLICE_INITIAL_STATE,
        _persist: { rehydrated: true, version: 1 }
      },
      auth_SET_LOADING({ type: APP_SLICE_LOADING.BASE, value: true })
    )
  ).toEqual({
    ...AUTH_SLICE_INITIAL_STATE,
    _persist: { rehydrated: true, version: 1 },
    auth_loading: { ...AUTH_SLICE_INITIAL_STATE.auth_loading, isLoading: true }
  })
})
