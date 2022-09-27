// Interfaces
import { IApiResponseData } from '@/features/app/interfaces/app-api.interface'
import { ITodo } from './todo.interface'

export type ITodoResponseList = IApiResponseData<ITodo[]>
