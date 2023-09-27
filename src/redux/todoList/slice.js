import { createSlice, nanoid } from '@reduxjs/toolkit'
import { fetchTodosThunk } from './operations'
const initialState = {
	todos: [],
	filter: 'all',
}
const slice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
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
	extraReducers: builder => {
		builder.addCase(fetchTodosThunk.fulfilled, (state, action) => {
			state.todos = action.payload
		})
	},
})

export const todoReducer = slice.reducer
export const { deleteTodo, toggleTodo, clearSelected, clearTodos, setFilterStr } = slice.actions
