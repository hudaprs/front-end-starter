// Redux Toolkit
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

// Middleware
import { middleware_error } from './middleware.redux'

// Api
import { todoApi } from '@/features/todo/redux/todo.rtk'
import { authApi } from '@/features/auth/redux/auth.rtk'

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
  blacklist: ['api', 'etcTable']
}

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, reducer)

// Store
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(middleware_error, todoApi.middleware, authApi.middleware)
})

// Persist Store
const persistor = persistStore(store)

setupListeners(store.dispatch)

export { store, persistor }

// App Store
export type TRootState = ReturnType<typeof store.getState>

// Root State
export type TRootDispatch = typeof store.dispatch
