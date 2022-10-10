// React
import { memo, useCallback, useState, useEffect } from 'react'

// Components
import { StyledWrapper, Table, Modal } from './components'

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
import { useAppDispatch } from '@/features/app/hooks/app.hook'
import { useEtcTable } from '@/features/etc/hooks/table/etc-table.hook'
import { useTodo } from '@/features/todo/hooks/todo.hook'

// Rtk
import { todoApi } from '@/features/todo/redux/todo.rtk'

const TodoIndex = memo(() => {
  // Hook
  const dispatch = useAppDispatch()
  const { etcTable_find, etcTable_onChange } = useEtcTable([{ id: 1 }])
  const [form] = Form.useForm()
  const { t } = useTranslation()
  const {
    todo_fetchList,
    todo_isListLoading,
    todo_isListFetching,
    todo_list,
    todo_fetchDetail,
    todo_resetDetail,
    todo_create,
    todo_isCreateLoading,
    todo_update,
    todo_isUpdateLoading,
    todo_delete,
    todo_detail
  } = useTodo()
  const [modal, setModal] = useState<{ isCreateEditOpen: boolean }>({
    isCreateEditOpen: false
  })

  useEffect(() => {
    const getTodoList = todo_fetchList({ query: etcTable_find(1) })
    getTodoList.unwrap()

    return () => {
      /**
       * @note Abort this only in production
       * @note In development mode, because of <React.StrictMode /> it will rerender and will request will be aborted
       * @note Only cancel this if application is in production mode
       * @note It just only for useEffect
       * @note Another abort just when creating / update / delete save it in the same function
       */
      if (import.meta.env.PROD) getTodoList.abort()
    }
  }, [todo_fetchList, etcTable_find])

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

        todo_fetchList({ query: etcTable_find(1) })
      } catch (_) {
        //
      }
    },
    [etcTable_onChange, todo_fetchList, etcTable_find]
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
        const deleteResponse = await todo_delete({ params: { id } }).unwrap()

        // Note: If want to mutate state from cache with pessimist approach
        // Note: Remove this if you want to refetch data again after delete
        dispatch(
          todoApi.util.updateQueryData(
            'todo_fetchList',
            {
              query: etcTable_find(1)
            },
            todoList => {
              const todoIndex = todoList.findIndex(todo => todo.id === id)

              if (todoIndex !== -1) {
                todoList.splice(todoIndex, 1)
              }
            }
          )
        )

        notificationUtils_open('success', {
          message: deleteResponse.message
        })
      } catch (_) {
        //
      }
    },
    [todo_delete, dispatch, etcTable_find]
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

          // Note: If want to mutate state from cache with pessimist approach
          // Note: Remove this if you want to refetch data again after create / update
          dispatch(
            todoApi.util.updateQueryData(
              'todo_fetchList',
              {
                query: etcTable_find(1)
              },
              todoList => {
                todoList.push(response.result)
              }
            )
          )
        }

        handleModal('isCreateEditOpen', false)

        notificationUtils_open('success', {
          message: response.message
        })
      } catch (_) {
        //
      }
    },
    [
      todo_create,
      todo_update,
      handleModal,
      todo_detail?.id,
      dispatch,
      etcTable_find
    ]
  )

  return (
    <StyledWrapper>
      {/* Table */}
      <Table
        loading={todo_isListLoading}
        fetching={todo_isListFetching}
        data={todo_list}
        onChange={onChangeTable}
        onCreate={() => onCancel()}
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
