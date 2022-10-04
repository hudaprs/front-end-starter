// Redux Toolkit
import { isRejectedWithValue } from '@reduxjs/toolkit'
import type { Middleware } from '@reduxjs/toolkit'

// Utils
import { notificationUtils_open } from '@/features/app/utils/notification.utils'

// Interfaces
import { IApiResponseError } from '@/features/app/interfaces/app-api.interface'

// i18n
import i18n from '@/plugins/i18n'

const middleware_renderGenericError = (errorType: string): string => {
  switch (errorType) {
    case 'FETCH_ERROR':
      return i18n.t('app.error.internalServerError')
    default:
      return ''
  }
}

/**
 * @description Handle error in server
 *
 * @return {Middleware} Redux Toolkit Middlware
 */
export const middleware_error: Middleware = () => next => action => {
  // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
  if (isRejectedWithValue(action)) {
    const _action = action as {
      payload: {
        status: string | number
        data: IApiResponseError
        error?: string
      }
    }
    const {
      payload: { data, error }
    } = _action

    const GENERIC_ERROR = middleware_renderGenericError(
      _action.payload.status as string
    )

    notificationUtils_open('error', {
      message: GENERIC_ERROR || error || data.message
    })
  }

  return next(action)
}
