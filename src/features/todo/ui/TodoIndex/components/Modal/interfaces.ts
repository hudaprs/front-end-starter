// Antd
import { ModalProps } from 'antd'

// Interfaces
import { ITodoForm } from '@/features/todo/interfaces/todo.interface'

export interface IModalProps extends ModalProps {
  onSubmit: (form: ITodoForm) => void
}
