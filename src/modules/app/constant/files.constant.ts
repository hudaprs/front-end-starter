import type { IRequestColumnExcel } from "../model/app.model";

export const EXAMPLE_DATA_COLUMN_VALIDATIONS:IRequestColumnExcel = {
  firstName: {
    columnName: 'First Name',
    required: true,
    validation: (name:string) => !!name,
    message: 'user.column.error.first_name',
    key: 'first_name',
  },
  lastName: {
    columnName: 'Last Name',
    required: true,
    validation: (name: string) => !!name,
    message: 'user.column.error.last_name',
    key: 'last_name',
  },
  email: {
    columnName: 'Email',
    required: true,
    validation: (email: string) =>
      !!email &&
      !!email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      ),
    message: 'user.column.error.email',
    key: 'email',
  },
  phoneNumber: {
    columnName: 'Phone Number',
    required: true,
    validation: (phoneNumber:string) => !!phoneNumber && /^[0-9]{1,15}$/g.test(phoneNumber),
    message: 'user.column.error.phone_number',
    key: 'phone_number',
  },
};

export const EXAMPLE_DATA_COLUMN_REQUIRED = [
  'firstName',
  'lastName',
  'email',
  'phoneNumber',
]
