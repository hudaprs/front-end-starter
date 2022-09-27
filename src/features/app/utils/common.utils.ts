/**
 * @description Delay
 *
 * @param {number} ms
 *
 * @return {Promise<void>} Promise<void>
 */
export const commonUtils_delay = (ms: number): Promise<void> =>
  new Promise(res => setTimeout(res, ms))

/**
 * @description Convert object to query string
 *
 * @param {[key: string]: any} params
 *
 * @return {string}
 */
export const commonUtils_queryString = (params: {
  [key: string]: string | number | boolean
}): string => {
  return `?${Object.keys(params)
    .map(key => key + '=' + params[key])
    .join('&')}`
}
