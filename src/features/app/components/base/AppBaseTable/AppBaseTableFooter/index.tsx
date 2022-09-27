// React
import { memo } from 'react'

// Components
import { AppBasePagination } from '@/features/app/components'

const AppBaseTableFooter = memo(() => {
  return <AppBasePagination />
})

AppBaseTableFooter.displayName = 'AppBaseTableFooter'

export { AppBaseTableFooter }
