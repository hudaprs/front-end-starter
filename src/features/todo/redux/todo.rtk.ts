// Interfaces
import {
  ITodoAttrsCreate,
  ITodoAttrsDetail,
  ITodoAttrsList,
  ITodoAttrsUpdate,
  ITodoAttrsDelete
} from '@/features/todo/interfaces/todo-attrs.interface'
import { ITodo } from '@/features/todo/interfaces/todo.interface'

// Rtk
import { emptySplitApi } from '@/features/app/redux/app.rtk'

export const todoApi = emptySplitApi
  .enhanceEndpoints({ addTagTypes: ['TodoList'] })
  .injectEndpoints({
    endpoints: builder => ({
      todo_fetchList: builder.query<ITodo[], ITodoAttrsList | null>({
        query: payload => ({
          url: '/todos',
          params: payload ? payload?.query : undefined
        }),
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
      todo_fetchDetail: builder.mutation<ITodo, ITodoAttrsDetail>({
        query: payload => `/todos/${payload.params.id}`
      }),
      todo_create: builder.mutation<ITodo, ITodoAttrsCreate>({
        query: payload => ({
          url: `/todos`,
          method: 'POST',
          body: payload.body
        }),
        onQueryStarted: async (payload, { dispatch, queryFulfilled }) => {
          const patch = (newTodo?: Omit<ITodo, 'id'>) =>
            todoApi.util.updateQueryData(
              'todo_fetchList',
              { query: { _limit: 5 } },
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

            dispatch(patch(response.data))
          } catch {
            dispatch(patch()).undo()
          }
        }

        // Note: if want to re-fetch automatically
        // invalidatesTags: [{ type: 'TodoList' }]
      }),
      todo_update: builder.mutation<ITodo, ITodoAttrsUpdate>({
        query: payload => ({
          url: `/todos/${payload.params.id}`,
          method: 'PATCH',
          body: payload.body
        }),
        invalidatesTags: (result, err, { params: { id } }) => [
          { type: 'TodoList', id }
        ]
      }),
      todo_delete: builder.mutation<ITodo, ITodoAttrsDelete>({
        query: payload => ({
          url: `/todos/${payload.params.id}`,
          method: 'DELETE'
        }),
        onQueryStarted: async (payload, { dispatch, queryFulfilled }) => {
          const patch = todoApi.util.updateQueryData(
            'todo_fetchList',
            { query: { _limit: 5 } },
            todoList => todoList.filter(todo => todo.id !== payload.params.id)
          )

          try {
            await queryFulfilled

            dispatch(patch)
          } catch {
            dispatch(patch).undo()
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
