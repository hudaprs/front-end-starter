// Interfaces
import {
  ITodoAttrsDetail,
  ITodoAttrsList
} from '@/features/todo/interfaces/todo-attrs.interface'
import { ITodo } from '@/features/todo/interfaces/todo.interface'

// Utils
import { commonUtils_queryString } from '@/features/app/utils/common.utils'

// Rtk
import { emptySplitApi } from '@/features/app/redux/app.rtk'

export const todoApi = emptySplitApi
  .enhanceEndpoints({ addTagTypes: ['Todo'] })
  .injectEndpoints({
    endpoints: builder => ({
      todo_fetchList: builder.query<ITodo[], ITodoAttrsList>({
        query: payload => `/todos${commonUtils_queryString(payload.query)}`,
        providesTags: result => {
          if (result) {
            return [
              ...result.map(item => ({
                type: 'Todo' as const,
                id: item.id
              })),
              'Todo'
            ]
          } else {
            return ['Todo']
          }
        }
      }),
      todo_fetchDetail: builder.query<ITodo, ITodoAttrsDetail>({
        query: payload => `/todos/${payload.params.id}`,
        providesTags: (result, err, arg) => [
          { type: 'Todo', id: arg.params.id }
        ]
      })
    }),
    overrideExisting: false
  })

export const { useTodo_fetchListQuery, useLazyTodo_fetchDetailQuery } = todoApi
