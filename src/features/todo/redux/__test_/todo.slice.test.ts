// Slice
import reducer from '../todo.slice'

// Constant
import { TODO_SLICE_INITIAL_STATE } from '@/features/todo/constant/todo-slice.constant'

it('Todo slice should return initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual(
    TODO_SLICE_INITIAL_STATE
  )
})
