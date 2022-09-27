// React
import { useEffect, useRef, useCallback } from 'react'

// Axios
import axios from 'axios'

// Lodash
import isEmpty from 'lodash/isEmpty'

// Constant
import { REQUEST_SAVER } from '@/features/app/constant/app-request-saver.constant'

type TRequestSaver = {
  cancel: () => void
  id: REQUEST_SAVER
  anotherId?: string | number
}

const useAppRequestSaver = () => {
  // Hook
  const requests = useRef<TRequestSaver[]>([])

  // Cancel all request when leaving page
  useEffect(() => {
    return () => {
      if (requests.current.length !== 0) {
        requests.current.forEach((request: TRequestSaver) => {
          appRequestSaver_cancel(request.id)
        })
      }
    }

    // eslint-disable-next-line
  }, [])

  /**
   * @description Set cancel token
   *
   * @param {REQUEST_SAVER} id
   * @param {any} anotherId
   *
   * @return {object} { cancelToken: string }
   */
  const appRequestSaver_setCancelToken = useCallback(
    (
      id: REQUEST_SAVER,
      anotherId?: string | number
    ): { cancelToken: unknown } => {
      const axiosSource = axios.CancelToken.source()

      // Remove previous request if there's another new request
      const matchedRequest = requests.current.find((request: TRequestSaver) => {
        if (anotherId) {
          return request?.anotherId === anotherId
        } else {
          return request.id === id
        }
      })

      if (matchedRequest) {
        // Cancel request if exists
        matchedRequest.cancel()

        requests.current = requests.current.filter((request: TRequestSaver) => {
          if (anotherId) {
            return request?.anotherId === anotherId
          } else {
            return request.id !== id
          }
        })
      } else {
        // Push another cancel token
        requests.current = [
          ...requests.current,
          { cancel: axiosSource.cancel, id, anotherId }
        ]
      }

      return { cancelToken: axiosSource.token }
    },
    []
  )

  /**
   * @description Clear previous request
   *
   * @param {REQUEST_SAVER} id
   *
   * @return {void} void
   */
  const appRequestSaver_clearOldRequest = useCallback((id: REQUEST_SAVER) => {
    requests.current = requests.current.filter(
      (request: TRequestSaver) => request.id !== id
    )
  }, [])

  /**
   * @description Cancel some request
   *
   * @param {REQUEST_SAVER} id
   * @param {number} anotherId
   *
   * @return {void} void
   */
  const appRequestSaver_cancel = useCallback(
    (id: REQUEST_SAVER, anotherId?: number): void => {
      // Find the correct request match the id and cancel it
      const findCorrectRequest = (requests.current.find(
        (request: TRequestSaver) => {
          if (anotherId) {
            return request?.anotherId === anotherId
          } else {
            return request.id === id
          }
        }
      ) || {}) as TRequestSaver

      if (!isEmpty(findCorrectRequest)) {
        // Cancel the request
        findCorrectRequest.cancel()

        // Remove the previous cancel token if axios already canceled
        appRequestSaver_clearOldRequest(findCorrectRequest.id)
      }
    },
    [appRequestSaver_clearOldRequest]
  )

  return { requests, appRequestSaver_setCancelToken, appRequestSaver_cancel }
}

export { useAppRequestSaver }
