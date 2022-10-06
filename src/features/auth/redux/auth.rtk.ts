// Interfaces
import { IAuthAttrsLogin } from '@/features/auth/interfaces/auth-attrs.interface'
import {
  IAuthResponseToken,
  IAuthResponseAuthenticatedUser
} from '@/features/auth/interfaces/auth-response.interface'

// Rtk
import { emptySplitApi } from '@/features/app/redux/app.rtk'

// Mutations
import { auth_SET_TOKEN, auth_SET_AUTHENTICATED_USER } from './auth.slice'

export const authApi = emptySplitApi.injectEndpoints({
  endpoints: builder => ({
    auth_register: builder.mutation<
      IAuthResponseAuthenticatedUser,
      IAuthAttrsLogin
    >({
      query: ({ body }) => ({
        url: '/auth/register',
        method: 'POST',
        body
      })
    }),
    auth_login: builder.mutation<IAuthResponseToken['result'], IAuthAttrsLogin>(
      {
        query: ({ body }) => ({
          url: '/auth/login',
          method: 'POST',
          body
        }),
        transformResponse: (response: IAuthResponseToken) => response.result,
        onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
          try {
            const response = await queryFulfilled

            dispatch(auth_SET_TOKEN(response.data))
          } catch {
            //
          }
        }
      }
    ),
    auth_me: builder.query<IAuthResponseAuthenticatedUser['result'], void>({
      query: () => ({
        url: `/auth/me`
      }),
      transformResponse: (response: IAuthResponseAuthenticatedUser) =>
        response.result,
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const response = await queryFulfilled

          dispatch(auth_SET_AUTHENTICATED_USER(response.data))
        } catch {
          //
        }
      }
    })
  }),
  overrideExisting: false
})

export const {
  useAuth_registerMutation,
  useAuth_loginMutation,
  useLazyAuth_meQuery
} = authApi
