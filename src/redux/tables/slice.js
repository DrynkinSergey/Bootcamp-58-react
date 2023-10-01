import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
	name: 'tables',
	initialState: {
		tables: ['todo', 'inProgress', 'done'],
	},
	reducers: {
		addTable: (state, action) => {
			state.tables.push(action.payload)
		},
		deleteTable: (state, action) => {
			state.tables = state.tables.filter(item => item !== action.payload)
		},
	},
})
export const tableReducer = slice.reducer
export const { addTable, deleteTable } = slice.actions
