export interface IAuthAttrsLogin {
  body: {
    email: string
    password: string
  }
}

export interface IAuthAttrsRegister {
  body: {
    name: string
    email: string
    password: string
  }
}

export interface IAuthAttrsResetPassword {
  body: {
    email: string
  }
}
