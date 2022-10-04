// Interfaces
import { TEtcTablePaginationType } from '@/features/etc/interfaces/table/etc-table-type.interface'

// Antd
import { PaginationProps } from 'antd'

export interface IAppBaseTableFooterProps {
  paginationAttrs?: PaginationProps
  onChange: (type: TEtcTablePaginationType, value: string | number) => void
}
