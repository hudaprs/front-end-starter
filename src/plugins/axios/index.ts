// Axios
import defaultAxios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'

// Interfaces
import { IApiResponseBase } from '@/features/app/interfaces/app-api.interface'

/**
 * @description Handle axios error response
 *
 * @param {AxiosError} response
 *
 * @return {IApiResponseBase} response
 */
const axios_handleErrorResponse = (response: AxiosError): IApiResponseBase => {
  const mapResponse: IApiResponseBase = {
    ok: false,
    config: response.config,
    message: response.message,
    headers: null,
    errorStatus: response.status,
    result: response.response
  }

  /** @note logging for development only */
  if (['development'].includes(import.meta.env.MODE))
    console.error(mapResponse, 'AXIOS ERROR')

  return mapResponse
}

const axios_handleSuccessResponse = (
  response: AxiosResponse
): IApiResponseBase => {
  const mapResponse: IApiResponseBase = {
    ok: true,
    config: response.config,
    message: response.statusText,
    status: response.status,
    headers: response.headers,
    result: response.data
  }

  /** @note logging for development only */
  if (['development'].includes(import.meta.env.MODE))
    console.log(mapResponse, 'AXIOS OK')

  return mapResponse
}

const config: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 10000
}

const _axios = defaultAxios.create(config)

_axios.interceptors.request.use(
  async config => {
    return config
  },
  error => {
    return Promise.reject(axios_handleErrorResponse(error))
  }
)

_axios.interceptors.response.use(
  async response => {
    return axios_handleSuccessResponse(response)
  },
  async error => {
    return Promise.reject(axios_handleErrorResponse(error))
  }
)

const axios = async <T>(
  url: string,
  method: 'get' | 'post' | 'put' | 'delete',
  attrs: AxiosRequestConfig
): Promise<T> => {
  try {
    const response = await _axios({
      url,
      method,
      ...attrs
    })

    return Promise.resolve(response.data)
  } catch (err) {
    return Promise.reject(err)
  }
}

export { axios }
