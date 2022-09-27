// Interfaces
import { TInputTypeTable } from '@/features/app/interfaces/app-type.interface'

// React
import { ReactNode } from 'react'

export interface IAppBaseTableHeaderProps {
  left?: ReactNode
  loading?: boolean
  onChange: (type: TInputTypeTable, value: string | number) => void
}
