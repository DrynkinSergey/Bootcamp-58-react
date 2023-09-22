import { combineReducers } from 'redux'
import { counterReducer } from './counter/reducer'
import { todoReducer } from './todoList/reducer'

export const rootReducer = combineReducers({
	counter: counterReducer,
	todos: todoReducer,
})
