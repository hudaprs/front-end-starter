// Redux Toolkit
import { combineReducers } from '@reduxjs/toolkit'

// Slices
import app from '@/features/app/redux/app.slice'
import auth from '@/features/auth/redux/auth.slice'

const plainReducers = {
  app,
  auth
}

const reducerRedux_reducers = combineReducers(plainReducers)

export { plainReducers, reducerRedux_reducers }
