import { createSlice, nanoid } from '@reduxjs/toolkit'
import { fetchTodosThunk, toggleTodoThunk } from './operations'
const initialState = {
	todos: [],
	filter: 'all',
	testValue: '',
	loading: false,
	currentItem: null,
}
const slice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		setFilterStr: (state, action) => {
			state.filter = action.payload
		},
		setValue: (state, action) => {
			state.testValue = action.payload
		},
		setCurrentItem: (state, action) => {
			state.currentItem = action.payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchTodosThunk.fulfilled, (state, action) => {
				state.todos = action.payload
				state.currentItem = null
			})
			.addCase(toggleTodoThunk.pending, (state, { payload }) => {
				state.loading = true
			})
			.addCase(toggleTodoThunk.fulfilled, (state, { payload }) => {
				state.loading = false
			})
	},
})

export const todoReducer = slice.reducer
export const { setFilterStr, setValue, setCurrentItem } = slice.actions
