// Antd
import { FormInstance, ModalProps } from 'antd'

// Interfaces
import { ITodoForm } from '@/features/todo/interfaces/todo.interface'

export interface IModalProps extends ModalProps {
  data: ITodoForm
  form: FormInstance<ITodoForm>
  onSubmit: (form: ITodoForm) => void
}
