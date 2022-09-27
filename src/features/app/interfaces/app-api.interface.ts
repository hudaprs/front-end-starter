// Axios
import { AxiosRequestConfig, AxiosRequestHeaders } from 'axios'

export interface IApiAxiosRequestConfig {
  requestConfig: AxiosRequestConfig
}

export interface IApiResponseBase {
  ok: boolean
  message: string
  config: AxiosRequestConfig
  headers: AxiosRequestHeaders | null
  status?: number
  errorStatus?: string
  result: unknown
}

export interface IApiPagination<T> {
  currentPage: number
  pageSize: number
  totalData: number
  totalPage: number
  list: T
}

export interface IApiResponse<T> extends IApiResponseBase {
  result: T
}

export interface IApiResponseData<T> extends IApiResponseBase {
  result: {
    message: string
    data: T
  }
}

export interface IApiResponsePagination<T> extends IApiResponseBase {
  result: {
    message: string
    data: IApiPagination<T>
  }
}
