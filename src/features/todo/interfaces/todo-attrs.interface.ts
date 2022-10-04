// Interfaces
import { IEtcTablePagination } from '@/features/etc/interfaces/table/etc-table-type.interface'

export interface ITodoAttrsList {
  query?: IEtcTablePagination
}

export interface ITodoAttrsDetail {
  params: {
    id: number
  }
}

export interface ITodoAttrsCreate {
  body: {
    title: string
  }
}

export interface ITodoAttrsUpdate {
  params: {
    id: number
  }
  body: {
    title: string
    completed: boolean
  }
}

export interface ITodoAttrsDelete {
  params: { id: number }
}
