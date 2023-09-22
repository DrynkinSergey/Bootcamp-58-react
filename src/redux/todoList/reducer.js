import { DELETE } from './constants'

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
		default:
			return state
	}
}
