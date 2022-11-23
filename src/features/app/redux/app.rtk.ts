// Redux Toolkit
import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError
} from '@reduxjs/toolkit/query'

// Mutations
import { auth_SET_TOKEN, auth_LOGOUT } from '@/features/auth/redux/auth.slice'

// Interfaces
import { IAuthResponseToken } from '@/features/auth/interfaces/auth-response.interface'

// Plugins
import { TRootState } from '@/plugins'

// Mutex
import { Mutex } from 'async-mutex'

const mutex = new Mutex()

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APP_BASE_URL,
  prepareHeaders(headers, { getState }) {
    const rootState = getState() as TRootState

    if (rootState.auth.auth_token.token) {
      headers.set('Authorization', `Bearer ${rootState.auth.auth_token.token}`)
    }

    return headers
  }
})

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)
  if (result.error && result.error.status === 401) {
    // checking whether the mutex is locked
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()
      try {
        const refreshResult = (await baseQuery(
          '/auth/refresh-token',
          api,
          extraOptions
        )) as { data: IAuthResponseToken }

        if (refreshResult.data) {
          api.dispatch(auth_SET_TOKEN(refreshResult.data?.result))

          // retry the initial query
          result = await baseQuery(args, api, extraOptions)
        } else {
          api.dispatch(auth_LOGOUT())
        }
      } catch (_) {
        api.dispatch(auth_LOGOUT())
      } finally {
        // release must be called once the mutex should be released again.
        release()
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }

  return result
}

export const emptySplitApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({})
})
