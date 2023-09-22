import { ADD_TODO, CLEAR, CLEAR_SELECTED, DELETE, TOGGLE_TODO } from './constants'

const initialState = {
	todos: [{ todo: 'REACT', id: 1, completed: true }],
	filter: 'all',
}
export const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case DELETE:
			return {
				...state,
				todos: state.todos.filter(item => item.id !== action.payload),
			}
		case ADD_TODO:
			return {
				...state,
				todos: [...state.todos, action.payload],
			}
		case TOGGLE_TODO:
			return {
				...state,
				todos: state.todos.map(item => (item.id === action.payload ? { ...item, completed: !item.completed } : item)),
			}
		case CLEAR:
			return {
				...state,
				todos: [],
			}
		case CLEAR_SELECTED:
			return {
				...state,
				todos: state.todos.filter(item => !item.completed),
			}
		default:
			return state
	}
}
