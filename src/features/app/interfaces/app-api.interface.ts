export interface IApiPagination<T> {
  currentPage: number
  pageSize: number
  totalData: number
  totalPage: number
  list: T
}

export interface IApiResponse<T> {
  message: string
  result: T
}

export interface IApiResponsePagination<T> {
  message: string
  result: IApiPagination<T>
}

export interface IApiResponseError {
  message: string
  errors?: {
    message: string
    field?: string
  }[]
}
