import { nanoid } from 'nanoid'
import { ADD_TODO, CLEAR, CLEAR_SELECTED, DELETE, TOGGLE_TODO } from './constants'

export const deleteTodo = id => ({ type: DELETE, payload: id })

export const addTodo = title => ({
	type: ADD_TODO,
	payload: {
		id: nanoid(),
		completed: false,
		todo: title,
	},
})

export const toggleTodo = id => ({ type: TOGGLE_TODO, payload: id })

export const clearTodos = () => ({ type: CLEAR })

export const clearSelected = () => ({ type: CLEAR_SELECTED })
