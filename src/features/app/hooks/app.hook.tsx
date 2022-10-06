// Store
import type { TRootDispatch, TRootState } from '@/plugins/redux'

// React Redux
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

// Mutations
import { app_SET_LANGUAGE } from '@/features/app/redux/app.slice'

export const useAppDispatch: () => TRootDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector

export const useApp = () => {
  // Hook
  const app_locale = useAppSelector(state => state.app.app_locale)

  return { app_locale, app_SET_LANGUAGE }
}
