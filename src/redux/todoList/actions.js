import { DELETE } from './constants'

export const deleteTodo = id => ({ type: DELETE, payload: id })
