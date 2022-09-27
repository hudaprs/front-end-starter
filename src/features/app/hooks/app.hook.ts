// Store
import type { TRootDispatch, TRootState } from '@/plugins'

// React Redux
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

export const useAppDispatch: () => TRootDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector
