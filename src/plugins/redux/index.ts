// Redux Toolkit
import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

// Middleware
import { middleware_error } from './middleware.redux'

// Api
import { emptySplitApi } from '@/features/app/redux/app.rtk'

// Reducer
import { reducerRedux_reducers as reducer } from './reducer.redux'

// Redux Persist
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// Config for Redux Persist
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['auth']
}

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, reducer)

// Listener Middleware
export const listenerMiddleware = createListenerMiddleware()

// Store
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
      .prepend(listenerMiddleware.middleware)
      .concat(middleware_error, emptySplitApi.middleware)
})

// Persist Store
const persistor = persistStore(store)

setupListeners(store.dispatch)

export { store, persistor }

// App Store
export type TRootState = ReturnType<typeof store.getState>

// Root State
export type TRootDispatch = typeof store.dispatch
