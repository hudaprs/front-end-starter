// Redux Toolkit
import { combineReducers } from '@reduxjs/toolkit'

// Api
import { todoApi } from '@/features/todo/redux/todo.rtk'
import { authApi } from '@/features/auth/redux/auth.rtk'

// Slices
import app from '@/features/app/redux/app.slice'
import auth from '@/features/auth/redux/auth.slice'
import etcTable from '@/features/etc/redux/table/etc-table.slice'

const plainReducers = {
  app,
  auth,
  etcTable,
  [todoApi.reducerPath]: todoApi.reducer,
  [authApi.reducerPath]: authApi.reducer
}

const reducerRedux_reducers = combineReducers(plainReducers)

export { plainReducers, reducerRedux_reducers }
