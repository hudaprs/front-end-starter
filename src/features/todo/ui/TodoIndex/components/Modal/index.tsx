// React
import { memo, useCallback } from 'react'

// Components
import {
  AppBaseFormItem,
  AppBaseInput,
  AppBaseModal
} from '@/features/app/components'
import { ITodoForm } from '@/features/todo/interfaces/todo.interface'

// Interfaces
import { IModalProps } from './interfaces'

// i18n
import { useTranslation } from 'react-i18next'

// Antd
import { Form } from 'antd'

const Modal = memo(({ onSubmit, form, ...rest }: IModalProps) => {
  // Hook
  const { t } = useTranslation()

  /**
   * @description Submit the form
   *
   * @return {void} void
   */
  const onOk = useCallback(async (): Promise<void> => {
    try {
      const response = (await form.validateFields()) as ITodoForm

      onSubmit(response)
    } catch (_) {
      //
    }
  }, [form, onSubmit])

  return (
    <AppBaseModal {...rest} onOk={onOk} forceRender>
      <Form form={form} layout='vertical' requiredMark={false}>
        {/* Title */}
        <AppBaseFormItem
          name='title'
          label={t('todo.form.title')}
          rules={[{ required: true, type: 'string' }]}
        >
          <AppBaseInput placeholder={t('todo.formPlaceholder.title')} />
        </AppBaseFormItem>
      </Form>
    </AppBaseModal>
  )
})

Modal.displayName = 'Modal'

export { Modal }
