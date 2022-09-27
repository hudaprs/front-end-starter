// Interfaces
import { TInputTypeTable } from '@/features/app/interfaces/app-type.interface'
import { ITodo } from '@/features/todo/interfaces/todo.interface'

export interface ITableProps {
  data?: ITodo[]
  loading?: boolean
  fetching?: boolean
  onChange: (inputType: TInputTypeTable, value: string | number) => void
  onCreate: () => void
  onEdit: (id: number) => void
  onDelete: (id: number) => void
}
