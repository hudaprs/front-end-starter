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
import { ITodo } from '@/features/todo/interfaces/todo.interface'

// Rtk
import { emptySplitApi } from '@/features/app/redux/app.rtk'

// Plugins
import { TRootState } from '@/plugins'

export const todoApi = emptySplitApi
  .enhanceEndpoints({ addTagTypes: ['TodoList'] })
  .injectEndpoints({
    endpoints: builder => ({
      todo_fetchList: builder.query<
        ITodoResponseList['result'],
        ITodoAttrsList | undefined
      >({
        query: payload => ({
          url: '/todos',
          params: payload?.query
        }),
        transformResponse: (response: ITodoResponseList) => response.result,
        providesTags: result => {
          if (result) {
            return [
              ...result.map(item => ({
                type: 'TodoList' as const,
                id: item.id
              })),
              'TodoList'
            ]
          } else {
            return [{ type: 'TodoList' }]
          }
        }
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
        }),
        onQueryStarted: async (_, { dispatch, queryFulfilled, getState }) => {
          const rootState = getState() as TRootState
          const table = rootState.etcTable.etcTable_list.find(
            table => table.id === 1
          )

          if (table) {
            const patch = (newTodo?: Omit<ITodo, 'id'>) =>
              todoApi.util.updateQueryData(
                'todo_fetchList',
                { query: table },
                todoList => {
                  if (newTodo) {
                    todoList.push({
                      id: 0, // Just for initial value, must be equal to todo_fetchList return type (ITodo[])
                      ...newTodo
                    })
                  }
                }
              )

            try {
              const response = await queryFulfilled

              dispatch(patch(response.data.result))
            } catch {
              dispatch(patch()).undo()
            }
          }
        }

        // Note: if want to re-fetch automatically
        // invalidatesTags: [{ type: 'TodoList' }]
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
        }),
        onQueryStarted: async (
          payload,
          { dispatch, queryFulfilled, getState }
        ) => {
          const rootState = getState() as TRootState
          const table = rootState.etcTable.etcTable_list.find(
            table => table.id === 1
          )

          if (table) {
            const patch = todoApi.util.updateQueryData(
              'todo_fetchList',
              { query: table },
              todoList => {
                const todoIndex = todoList.findIndex(
                  todo => todo.id === payload.params.id
                )
                if (todoIndex !== -1) todoList.splice(todoIndex, 1)
              }
            )

            try {
              await queryFulfilled

              dispatch(patch)
            } catch {
              dispatch(patch).undo()
            }
          }
        }

        // Note: if want to re-fetch automatically
        // invalidatesTags: (result, err, { params: { id } }) => [
        //   { type: 'TodoList', id }
        // ]
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
