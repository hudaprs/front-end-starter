// Redux Toolkit
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Interfaces
import { IEtcTableSliceInitialState } from '@/features/etc/interfaces/table/etc-table-slice.interface'
import {
  IEtcTablePagination,
  TEtcTableInitial,
  TEtcTableChange
} from '@/features/etc/interfaces/table/etc-table-type.interface'

// Constant
import { ETC_TABLE_SLICE_INITIAL_STATE } from '@/features/etc/constant/table/etc-table.slice.constant'

// Initial State
const PAGINATION_INITIAL_VALUE: IEtcTablePagination = {
  pageNumber: 0, //  set initial value, 0 mean 1, 1 mean 0
  limit: 10,
  sort: 'desc',
  column: '',
  search: ''
}
const initialState: IEtcTableSliceInitialState = ETC_TABLE_SLICE_INITIAL_STATE

const etcTable = createSlice({
  name: 'etcTable',
  initialState,
  reducers: {
    ETC_TABLE_INIT: (
      state,
      { payload }: PayloadAction<TEtcTableInitial[]>
    ): void => {
      // Create new instance of table
      const _table: ({ id: number } & IEtcTablePagination)[] = []

      payload.forEach(table => {
        _table.push({
          id: table.id,
          limit: table?.limit || 10,
          column: table?.column || '',
          sort: table?.sort || 'desc',
          pageNumber: 1,
          search: ''
        })
      })

      state.etcTable_list.push(..._table)
    },
    ETC_TABLE_REMOVE: (state, { payload }: PayloadAction<number>): void => {
      const index = state.etcTable_list.findIndex(table => table.id === payload)

      if (index !== -1) {
        state.etcTable_list.splice(index, 1)
      }
    },
    ETC_TABLE_CLEAR: (state): void => {
      state.etcTable_list = []
    },
    ETC_TABLE_CHANGE: (
      state,
      { payload: { id, type, value } }: PayloadAction<TEtcTableChange>
    ): void => {
      // Reset the table
      if (type === 'reset') {
        state.etcTable_list = state.etcTable_list.map(table => {
          if (table.id === id) {
            return { id, ...PAGINATION_INITIAL_VALUE }
          }

          return table
        })
      }

      // Watch any change when user interact with table
      state.etcTable_list = state.etcTable_list.map(table => {
        if (table.id === id) {
          return {
            ...table,
            [type as string]: value
          }
        }

        return table
      })
    }
  }
})

// Mutations
export const {
  ETC_TABLE_INIT,
  ETC_TABLE_CHANGE,
  ETC_TABLE_REMOVE,
  ETC_TABLE_CLEAR
} = etcTable.actions

export default etcTable.reducer
