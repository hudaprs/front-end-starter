// Redux Toolkit
import { combineReducers } from '@reduxjs/toolkit'

// Slices
import app from '@/features/app/redux/app.slice'
import auth from '@/features/auth/redux/auth.slice'
import etcTable from '@/features/etc/redux/table/etc-table.slice'

// Api
import { todoApi } from '@/features/todo/redux/todo.rtk'
import { authApi } from '@/features/auth/redux/auth.rtk'

const plainReducers = {
  app,
  auth,
  etcTable,
  [authApi.reducerPath]: authApi.reducer,
  [todoApi.reducerPath]: todoApi.reducer
}

const reducerRedux_reducers = combineReducers(plainReducers)

export { plainReducers, reducerRedux_reducers }
