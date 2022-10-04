// React
import { useCallback, useEffect } from 'react'

// Interfaces
import {
  TEtcTableChange,
  TEtcTableInitial,
  TEtcTablePaginationType
} from '@/features/etc/interfaces/table/etc-table-type.interface'

// Custom Hooks
import { useAppDispatch } from '@/features/app/hooks/app.hook'

// Mutations
import {
  ETC_TABLE_INIT,
  ETC_TABLE_CHANGE,
  ETC_TABLE_CLEAR,
  ETC_TABLE_REMOVE
} from '@/features/etc/redux/table/etc-table.slice'

// Store
import { store } from '@/plugins'

const useEtcTable = (props: TEtcTableInitial[]) => {
  // Hook
  const dispatch = useAppDispatch()

  // Init the table default values
  useEffect(() => {
    dispatch(ETC_TABLE_INIT(props))

    return () => {
      // Clear tables from store
      dispatch(ETC_TABLE_CLEAR())
    }
    // eslint-disable-next-line
  }, [])

  /**
   * @description Watch any change in table
   *
   * @param {TEtcTableChange} payload
   *
   * @return {void} void
   */
  const etcTable_onChange = useCallback(
    (payload: TEtcTableChange): void => {
      dispatch(ETC_TABLE_CHANGE(payload))
    },
    [dispatch]
  )

  /**
   * @description Remove specific table
   *
   * @param {number} id
   *
   * @return {void} void
   */
  const etcTable_remove = useCallback(
    (id: number): void => {
      dispatch(ETC_TABLE_REMOVE(id))
    },
    [dispatch]
  )

  /**
   * @description Find specific table
   *
   * @param {number} id
   *
   * @return {IEtcTableSliceTable} IEtcTableSliceTable
   */
  const etcTable_find = useCallback(
    (id: number): TEtcTablePaginationType | undefined => {
      return store
        .getState()
        .etcTable.etcTable_list.find(table => table.id === id) as
        | TEtcTablePaginationType
        | undefined
    },
    []
  )

  return {
    etcTable_onChange,
    etcTable_remove,
    etcTable_find
  }
}

export { useEtcTable }
