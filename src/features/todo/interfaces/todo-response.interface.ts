// Interfaces
import { IApiResponse } from '@/features/app/interfaces/app-api.interface'
import { ITodo } from './todo.interface'

export type ITodoResponseList = IApiResponse<ITodo[]>
export type ITodoResponseDetail = IApiResponse<ITodo>
