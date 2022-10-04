// React
import { useState, useCallback } from 'react'

// Interfaces
import { TInputTypeTable } from '@/features/app/interfaces/app-type.interface'

type TPagination = {
  pageNumber: number
  limit: number
  sort: 'asc' | 'desc'
  column: string
  search: string
}

const PAGINATION_INITIAL_VALUE: TPagination = {
  pageNumber: 0, //  set initial value, 0 mean 1, 1 mean 0
  limit: 10,
  sort: 'desc',
  column: 'Id',
  search: ''
}

const useAppTable = () => {
  // Hook
  const [pagination, setPagination] = useState<TPagination>(
    PAGINATION_INITIAL_VALUE
  )
  /**
   * @description Watch any change in table
   *
   * @param {TInputTypeTable} inputType
   * @param {string | number} value
   *
   * @return {void} void
   */
  const appTable_onChange = useCallback(
    (inputType: TInputTypeTable, value: string | number): void => {
      if (inputType === 'reset') {
        setPagination(() => ({ ...PAGINATION_INITIAL_VALUE }))
      } else {
        setPagination(prevPagination => ({
          ...prevPagination
        }))
      }
    },
    []
  )

  return {
    pagination,
    appTable_onChange
  }
}

export { useAppTable }
