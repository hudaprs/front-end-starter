// Interfaces
import { IEtcTablePagination } from './etc-table-type.interface'

export interface IEtcTableSliceTable extends IEtcTablePagination {
  id: number
}

export interface IEtcTableSliceInitialState {
  etcTable_list: IEtcTableSliceTable[]
}
