export type IColumnExcelValidation = {
  columnName: string;
  required: boolean;
  validation: (value: string, row?: IExampleValueExcel) => boolean;
  message: string;
  key: string;
};

export type IRequestColumnExcel = {
  [key: string]: IColumnExcelValidation;
};

export type IResponseColumnExcel = {
  text: string | number;
  value: string | number | boolean;
};

export type IExampleValueExcel = {
  [key: string]: string | number | boolean;
};

export type IOptionsDownlodFile = {
  type: string,
  fileName: string,
  fileFormat: string,
}
