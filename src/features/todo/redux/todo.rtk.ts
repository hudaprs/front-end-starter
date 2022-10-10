// Interfaces
import {
  ITodoAttrsCreate,
  ITodoAttrsDetail,
  ITodoAttrsList,
  ITodoAttrsUpdate,
  ITodoAttrsDelete
} from '@/features/todo/interfaces/todo-attrs.interface'
import {
  ITodoResponseDetail,
  ITodoResponseList
} from '@/features/todo/interfaces/todo-response.interface'

// Rtk
import { emptySplitApi } from '@/features/app/redux/app.rtk'

export const todoApi = emptySplitApi.injectEndpoints({
  endpoints: builder => ({
    todo_fetchList: builder.query<
      ITodoResponseList['result'],
      ITodoAttrsList | void
    >({
      query: payload => ({
        url: '/todos',
        params: payload?.query
      }),
      transformResponse: (response: ITodoResponseList) => response.result
    }),
    todo_fetchDetail: builder.mutation<
      ITodoResponseDetail['result'],
      ITodoAttrsDetail
    >({
      query: payload => `/todos/${payload.params.id}`,
      transformResponse: (response: ITodoResponseDetail) => response.result
    }),
    todo_create: builder.mutation<ITodoResponseDetail, ITodoAttrsCreate>({
      query: payload => ({
        url: `/todos`,
        method: 'POST',
        body: payload.body
      })
    }),
    todo_update: builder.mutation<ITodoResponseDetail, ITodoAttrsUpdate>({
      query: payload => ({
        url: `/todos/${payload.params.id}`,
        method: 'PATCH',
        body: payload.body
      })
    }),
    todo_delete: builder.mutation<ITodoResponseDetail, ITodoAttrsDelete>({
      query: payload => ({
        url: `/todos/${payload.params.id}`,
        method: 'DELETE'
      })
    })
  }),
  overrideExisting: false
})

export const {
  useLazyTodo_fetchListQuery,
  useTodo_fetchDetailMutation,
  useTodo_createMutation,
  useTodo_updateMutation,
  useTodo_deleteMutation
} = todoApi
