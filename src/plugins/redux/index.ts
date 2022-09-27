// Redux Toolkit
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

// Api
import { todoApi } from '@/features/todo/redux/todo.rtk'

// Store
const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(todoApi.middleware)
})

setupListeners(store.dispatch)

export { store }
