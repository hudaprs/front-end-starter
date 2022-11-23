/**
 * @description Handle Remove Duplicate Value Array
 * @param {Array} array
 * @return {Array}
 */
export const removeDuplicateValueArray = (array:any[]) => {
  return [...new Set(array)];
}

/**
 * @description Handle Compare Array
 * @param {Array} firstArray
 * @param {Array} secondArray
 * @return {Array}
 */
export const compareArray = (firstArray:any[], secondArray:any[]) => {
  return firstArray.filter((item) => secondArray.includes(item));
}

/**
 * @description Handle Average Number on Array
 * @param {Array} array
 * @return {Number}
 */
export const averageNumberArray = (array:number[]) => {
  return array.reduce((previousValue:number, currentValue:number) => previousValue + currentValue) / array.length;
}