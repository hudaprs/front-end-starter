// Interfaces
import { TEtcTablePaginationType } from '@/features/etc/interfaces/table/etc-table-type.interface'
import { ITodo } from '@/features/todo/interfaces/todo.interface'

export interface ITableProps {
  data?: ITodo[]
  loading?: boolean
  fetching?: boolean
  onChange: (inputType: TEtcTablePaginationType, value: string | number) => void
  onCreate: () => void
  onEdit: (id: number) => void
  onDelete: (id: number) => void
}
