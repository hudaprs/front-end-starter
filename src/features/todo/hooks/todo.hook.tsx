// Rtk
import {
  useLazyTodo_fetchListQuery,
  useTodo_createMutation,
  useTodo_deleteMutation,
  useTodo_fetchDetailMutation,
  useTodo_updateMutation
} from '@/features/todo/redux/todo.rtk'

const useTodo = () => {
  // Fetch Todo List
  const [
    todo_fetchList,
    {
      isLoading: todo_isListLoading,
      isFetching: todo_isListFetching,
      data: todo_list
    }
  ] = useLazyTodo_fetchListQuery()

  // Fetch Todo Detail
  const [
    todo_fetchDetail,
    {
      data: todo_detail,
      isLoading: todo_isDetailLoading,
      reset: todo_resetDetail
    }
  ] = useTodo_fetchDetailMutation()

  // Create Todo
  const [todo_create, { isLoading: todo_isCreateLoading }] =
    useTodo_createMutation()

  // Update Todo
  const [todo_update, { isLoading: todo_isUpdateLoading }] =
    useTodo_updateMutation()

  // Delete Todo
  const [todo_delete, { isLoading: todo_isDeleteLoading }] =
    useTodo_deleteMutation()

  return {
    todo_fetchList,
    todo_fetchDetail,
    todo_create,
    todo_update,
    todo_delete,
    todo_resetDetail,
    todo_isListLoading,
    todo_isListFetching,
    todo_list,
    todo_detail,
    todo_isDetailLoading,
    todo_isCreateLoading,
    todo_isUpdateLoading,
    todo_isDeleteLoading
  }
}

export { useTodo }
