// React
import { memo, useCallback, useState } from 'react'

// Components
import { StyledWrapper, Table, Modal } from './components'

// Rtk
import {
  useTodo_fetchListQuery,
  useLazyTodo_fetchDetailQuery
} from '@/features/todo/redux/todo.rtk'

// i18n
import { useTranslation } from 'react-i18next'

// Interfaces
import { ITodoForm } from '@/features/todo/interfaces/todo.interface'

const TodoIndex = memo(() => {
  // Hook
  const { t } = useTranslation()
  const [modal, setModal] = useState<{ isCreateEditOpen: boolean }>({
    isCreateEditOpen: false
  })
  const [skip, setSkip] = useState<{ detail: boolean }>({ detail: true })
  const [currentId, setCurrentId] = useState<number | null>(0)
  const {
    isLoading,
    isFetching,
    data: todoList
  } = useTodo_fetchListQuery({
    query: { _limit: 5 }
  })
  const [
    todo_fetchDetail,
    {
      isLoading: todo_isDetailLoading,
      isFetching: todo_isDetailFetching,
      data: todo_detail
    }
  ] = useLazyTodo_fetchDetailQuery()

  /**
   * @description Handle skip
   *
   * @param {string} type
   * @param {boolean} value
   *
   * @return {void} void
   */
  const handleSkip = useCallback((type: 'detail', value: boolean): void => {
    setSkip(previousSkip => ({
      ...previousSkip,
      [type]: value
    }))
  }, [])

  /**
   * @description Handle modal
   *
   * @param {string} type
   * @param {boolean} value
   *
   * @return {void} void
   */
  const handleModal = useCallback(
    (type: 'isCreateEditOpen', value: boolean): void => {
      setModal(previousModal => ({
        ...previousModal,
        [type]: value
      }))

      // Do when modal close
      if (!value) {
        setCurrentId(null)

        if (type === 'isCreateEditOpen') {
          handleSkip('detail', true)
        }
      }
    },
    [modal]
  )

  /**
   * @description Handle edit
   *
   * @param {number} id
   *
   * @return {Promise<void>} Promise<void>
   */
  const handleEdit = useCallback(async (id: number): Promise<void> => {
    try {
      setCurrentId(id)

      await todo_fetchDetail(
        {
          params: {
            id
          }
        },
        true
      ).unwrap()

      handleModal('isCreateEditOpen', true)
    } catch (_) {
      handleModal('isCreateEditOpen', false)
    }
  }, [])

  /**
   * @description Delete todo
   *
   * @param {number} id
   *
   * @return {void} void
   */
  const onDelete = useCallback((id: number): void => {
    //
  }, [])

  /**
   * @description Submit
   *
   * @param {ITodoForm} form
   *
   * @return {void} void
   */
  const onSubmit = useCallback(
    (form: ITodoForm): void => {
      //
    },
    [currentId]
  )

  return (
    <StyledWrapper>
      {/* Table */}
      <Table
        loading={isLoading}
        isFetching={isFetching}
        data={todoList}
        onChange={() => false}
        onCreate={() => handleModal('isCreateEditOpen', true)}
        onEdit={handleEdit}
        onDelete={onDelete}
      />

      {/* Modal */}
      <Modal
        title={t(`todo.title.${currentId ? 'edit' : 'create'}`)}
        visible={modal.isCreateEditOpen}
        onCancel={() => handleModal('isCreateEditOpen', false)}
        onSubmit={onSubmit}
      />
    </StyledWrapper>
  )
})

TodoIndex.displayName = 'TodoIndex'

export { TodoIndex }
