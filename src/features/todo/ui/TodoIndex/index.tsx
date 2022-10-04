// React
import { memo, useCallback, useState, useEffect } from 'react'

// Components
import { StyledWrapper, Table, Modal } from './components'

// Rtk
import {
  useLazyTodo_fetchListQuery,
  useTodo_fetchDetailMutation,
  useTodo_createMutation,
  useTodo_updateMutation,
  useTodo_deleteMutation
} from '@/features/todo/redux/todo.rtk'

// i18n
import { useTranslation } from 'react-i18next'

// Interfaces
import { ITodoForm } from '@/features/todo/interfaces/todo.interface'
import { ITodoResponseDetail } from '@/features/todo/interfaces/todo-response.interface'
import { TEtcTablePaginationType } from '@/features/etc/interfaces/table/etc-table-type.interface'

// Utils
import { commonUtils_delay } from '@/features/app/utils/common.utils'
import { notificationUtils_open } from '@/features/app/utils/notification.utils'

// Antd
import { Form } from 'antd'

// Custom Hooks
import { useEtcTable } from '@/features/etc/hooks/table/etc-table.hook'

const TodoIndex = memo(() => {
  // Hook
  const { etcTable_find, etcTable_onChange } = useEtcTable([{ id: 1 }])
  const [form] = Form.useForm()
  const { t } = useTranslation()
  const [modal, setModal] = useState<{ isCreateEditOpen: boolean }>({
    isCreateEditOpen: false
  })

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
  const [todo_fetchDetail, { data: todo_detail, reset: todo_resetDetail }] =
    useTodo_fetchDetailMutation()

  // Create Todo
  const [todo_create, { isLoading: todo_isCreateLoading }] =
    useTodo_createMutation()

  // Update Todo
  const [todo_update, { isLoading: todo_isUpdateLoading }] =
    useTodo_updateMutation()

  // Delete Todo
  const [todo_delete] = useTodo_deleteMutation()

  /**
   * @description Get todo list
   *
   * @return {void} void
   */
  const getTodoList = useCallback((): void => {
    todo_fetchList({ query: etcTable_find(1) })
  }, [todo_fetchList, etcTable_find])

  useEffect(() => {
    getTodoList()
  }, [getTodoList])

  /**
   * @description Handle modal
   *
   * @param {string} type
   * @param {boolean} value
   *
   * @return {Promise<void>} Promise<void>
   */
  const handleModal = useCallback(
    async (type: 'isCreateEditOpen', value: boolean): Promise<void> => {
      setModal(previousModal => ({
        ...previousModal,
        [type]: value
      }))

      // Do when modal close
      if (!value) {
        await commonUtils_delay(100)

        // Reset the previous fetched detail
        todo_resetDetail()

        // Clear the form
        form.resetFields()
      }
    },
    [todo_resetDetail, form]
  )

  /**
   * @description Watch any change in table
   *
   * @param {TEtcTablePaginationType} type
   * @param {string|number} value
   *
   * @return {Promise<void>} Promise<void>
   */
  const onChangeTable = useCallback(
    async (
      type: TEtcTablePaginationType,
      value: string | number
    ): Promise<void> => {
      try {
        etcTable_onChange({ id: 1, type, value })

        getTodoList()
      } catch (_) {
        //
      }
    },
    [etcTable_onChange, getTodoList]
  )

  /**
   * @description Handle edit
   *
   * @param {number} id
   *
   * @return {Promise<void>} Promise<void>
   */
  const handleEdit = useCallback(
    async (id: number): Promise<void> => {
      try {
        const response = await todo_fetchDetail({
          params: {
            id
          }
        }).unwrap()

        // Set form value
        form.setFieldsValue({ ...form.getFieldsValue(), title: response.title })

        handleModal('isCreateEditOpen', true)
      } catch (_) {
        handleModal('isCreateEditOpen', false)
      }
    },
    [handleModal, todo_fetchDetail, form]
  )

  /**
   * @description Delete todo
   *
   * @param {number} id
   *
   * @return {Promise<void>} Promise<void>
   */
  const onDelete = useCallback(
    async (id: number): Promise<void> => {
      try {
        await todo_delete({ params: { id } }).unwrap()
      } catch (_) {
        //
      }
    },
    [todo_delete]
  )

  /**
   * @description Submit
   *
   * @param {ITodoForm} form
   *
   * @return {Promise<void>} Promise<void>
   */
  const onSubmit = useCallback(
    async (form: ITodoForm): Promise<void> => {
      try {
        let response: ITodoResponseDetail

        if (todo_detail?.id) {
          response = await todo_update({
            params: { id: todo_detail.id },
            body: {
              ...form,
              completed: form?.completed || false
            }
          }).unwrap()
        } else {
          response = await todo_create({
            body: form
          }).unwrap()
        }

        handleModal('isCreateEditOpen', false)

        notificationUtils_open('success', {
          message: response.message
        })
      } catch (_) {
        //
      }
    },
    [todo_create, todo_update, handleModal, todo_detail?.id]
  )

  return (
    <StyledWrapper>
      {/* Table */}
      <Table
        loading={todo_isListLoading}
        fetching={todo_isListFetching}
        data={todo_list}
        onChange={onChangeTable}
        onCreate={() => handleModal('isCreateEditOpen', true)}
        onEdit={handleEdit}
        onDelete={onDelete}
      />

      {/* Modal */}
      <Modal
        form={form}
        title={t(`todo.title.${todo_detail?.id ? 'edit' : 'create'}`)}
        data={{ title: todo_detail?.title || '' }}
        open={modal.isCreateEditOpen}
        onCancel={() => handleModal('isCreateEditOpen', false)}
        confirmLoading={todo_isCreateLoading || todo_isUpdateLoading}
        onSubmit={onSubmit}
      />
    </StyledWrapper>
  )
})

TodoIndex.displayName = 'TodoIndex'

export { TodoIndex }
