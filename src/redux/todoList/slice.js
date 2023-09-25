import { createSlice, nanoid } from '@reduxjs/toolkit'
const initialState = {
	todos: [{ todo: 'REACT', id: 1, completed: true }],
	filter: 'all',
}
const slice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: {
			prepare: title => {
				return {
					payload: {
						id: nanoid(),
						completed: false,
						todo: title,
						createdAt: new Date().toLocaleTimeString(),
					},
				}
			},
			reducer: (state, action) => {
				state.todos.push(action.payload)
			},
		},
		deleteTodo: (state, action) => {
			state.todos = state.todos.filter(item => item.id !== action.payload)
		},
		toggleTodo: (state, action) => {
			const item = state.todos.find(item => item.id === action.payload)
			item.completed = !item.completed
		},
		clearTodos: (state, action) => {
			state.todos = []
		},
		clearSelected: (state, action) => {
			state.todos = state.todos.filter(item => !item.completed)
		},
		setFilterStr: (state, action) => {
			state.filter = action.payload
		},
	},
})

export const todoReducer = slice.reducer
export const { deleteTodo, toggleTodo, clearSelected, clearTodos, addTodo, setFilterStr } = slice.actions
