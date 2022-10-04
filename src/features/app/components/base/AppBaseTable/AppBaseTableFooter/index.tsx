// React
import { memo } from 'react'

// Components
import { AppBasePagination } from '@/features/app/components'

// Interfaces
import { IAppBaseTableFooterProps } from './interfaces'

const AppBaseTableFooter = memo(
  ({ paginationAttrs, onChange }: IAppBaseTableFooterProps) => {
    return (
      <AppBasePagination
        {...paginationAttrs}
        onChange={page => onChange('page', page)}
      />
    )
  }
)

AppBaseTableFooter.displayName = 'AppBaseTableFooter'

export { AppBaseTableFooter }
