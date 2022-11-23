import { read, utils } from 'xlsx';
import { EXAMPLE_DATA_COLUMN_REQUIRED, EXAMPLE_DATA_COLUMN_VALIDATIONS } from '../constant/files.constant';
import type { IColumnExcelValidation, IExampleValueExcel, IOptionsDownlodFile, IRequestColumnExcel, IResponseColumnExcel } from './model/useFile.model';

/**
 * @description Counting File Size
 * @param {Number} bytes
 * @returns {String}
 */
export const getFileSize = (bytes:number) => {
  const log = Math.floor(Math.log2(bytes) / 10);
  const unit = ['Bytes', 'Kb', 'Mb', 'Gb', 'Tb'][log];
  const size = (bytes / Math.pow(1024, log)).toFixed(1);

  return `${size} ${unit}`;
};

/**
 * @description Handle Convert Image to Base64
 * @param {File} file
 * @returns {Promise}
 */
export const convertImageToBase64 = (file:File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
};

/**
 * @description Handle Download File
 * @param {Blob} file
 * @param {Object} options
 * @returns {void}
 */
export const downloadFile = (file:Blob, options:IOptionsDownlodFile) => {
  const url = window.URL.createObjectURL(new Blob([file], { type: options?.type }));
  const linkElement = document.createElement('a');
  const fileName = `${options?.fileName}-${new Date().getTime().toString()}.${options?.fileFormat}`;
  
  linkElement.href = url;
  linkElement.setAttribute('download', fileName);
  document.body.appendChild(linkElement);
  linkElement.click();
}

/**
 * @description Handle Validate Column Excel
 * @param {Array} requireColumnExcel
 * @param {Array} currentColumnExcel
 * @return {Object}
 */
export const validateColumnExcel = (requireColumnExcel: IColumnExcelValidation[], currentColumnExcel: IResponseColumnExcel[]) => {
  let isValid = true; 
  const content: any = [];
  
  requireColumnExcel.forEach((headerColumnRequire, index) => {
    if (headerColumnRequire.required) {
      const columnExcel = currentColumnExcel[index]?.text ?? '';
      const sameColumnExcel = (columnExcel + '').toLowerCase() === headerColumnRequire.columnName.toLowerCase();

      // ✅ If Column Excel is same with Column Required, then it will be valid and will given boolean true
      isValid = isValid && sameColumnExcel;

      if (!sameColumnExcel) {
        // ❌ If Column Excel is not same with Column Required
        content.push({ no: index + 1, currentColumnName: columnExcel, requireColumnName: headerColumnRequire.columnName });
      }
    }
  });

  return { isValid, content };
};

/**
 * @description Handle Validate Value Excel
 * @param {Array} validatorExcel
 * @param {Array} valuesColumnExcel
 * @return {Object}
 */
export const validateValueExcel = (validatorExcel:IRequestColumnExcel, valuesColumnExcel:IExampleValueExcel[]) => {
  let isValid = true;
  const content:any = [];
  
  valuesColumnExcel.forEach((rowExcel:IExampleValueExcel, index) => {
    // 📑 This flow will be looping for each row excel
    Object.keys(rowExcel).forEach((key, index) => {
      // 📑 This flow will be looping for each column excel
      const { columnName, required, validation, message } = validatorExcel[key]; // 📑 Destructure column name, required, validation, and message from validatorExcel what we have defined in constant file

      if (required || rowExcel[key]) {
        // ✅ If Value Excel is passed with Required or Validation, then it will be valid and will given boolean true
        const valid = validation(rowExcel[key] as string, rowExcel);
        isValid = isValid && valid;

        if (!valid) {
          // ❌ If Value Excel is not valid with Validation, the system will create a message and new key isValid with value false
          rowExcel['isValid'] = false;
          rowExcel[key] = message ?? 'Error';
        }
      }
    })
  })

  return { isValid, content };
};

/**
 * @description Handle Validate Columns and Values Excel
 * @param {Array} header
 * @param {Array} content
 * @return {Boolean}
 */
export const validateColumnsAndValuesExcel = (header:IResponseColumnExcel[], content:IExampleValueExcel[]) => {
  // 📑 This flow will be validate columns and values excel
  const validateColumns = validateColumnExcel(Object.values(EXAMPLE_DATA_COLUMN_VALIDATIONS) as IColumnExcelValidation[], header); // 📑 Validate Columns Excel with Column Required
  if (!validateColumns.isValid) {
    // ❌ If Column Excel is not valid, the system will return false and will given array of content what is not valid
    return { isValid: false, content: validateColumns.content ?? [] };
  }

  const validateValues = validateValueExcel(EXAMPLE_DATA_COLUMN_VALIDATIONS, content);
  if(!validateValues.isValid) {
    // ❌ If Value Excel is not valid, the system will return false and will given array of content what is not valid
    return { isValid: false, content: content ?? [] };
  }

  // ✅ If Column Excel and Value Excel is valid, the system will return true
  return true
}

/**
 * @description Read File Excel
 * @param {File} file
 * @returns {Promise}
 */
export const readExcelFile = async (file: File) => {
  return new Promise((resolve) => {
    // 📑 This flow will be read file excel with xlsx library and also will be validate columns and values excel
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file); // 📑 Read File Excel and will be convert to ArrayBuffer

    fileReader.onload = async () => {
      // 📑 This flow will be executed when file excel is loaded
      const arrayBuffer = new Uint8Array(fileReader?.result as ArrayBuffer);
      const worksheet = read(arrayBuffer) // 📑 This is how to read file excel with xlsx library
      const columnsAndValuesExcel:IExampleValueExcel[] = utils.sheet_to_json(worksheet.Sheets[worksheet.SheetNames[0]], { // 📑 This is how to convert all sheets excel to json with xlsx library
        header: EXAMPLE_DATA_COLUMN_REQUIRED,
        defval: null
      });
      const firstContent:IExampleValueExcel = columnsAndValuesExcel.shift() ?? {}; 
      const columnExcel:IResponseColumnExcel[] = firstContent ? Object.keys(firstContent).map(item => ({
        text: firstContent[item] as string,
        value: item
      })) : [];

      const validateHeadersAndValuesExcel = await validateColumnsAndValuesExcel(columnExcel, columnsAndValuesExcel);
      if(validateHeadersAndValuesExcel === true) {
        // ✅ If File Excel has been read and validated, the system will return true and will given array of content
        resolve({
          column: columnExcel,
          content: columnsAndValuesExcel
        });
      } else {
        // ❌ If File Excel has been read but not validated, the system will return false and will given array of content
        resolve({
          headers: [],
          content: validateHeadersAndValuesExcel.content,
          isValid: validateHeadersAndValuesExcel.isValid,
        })
      }
    }
  })
}