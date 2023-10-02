import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
	name: 'tables',
	initialState: {
		tables: ['todo', 'inProgress', 'done'],
	},
	reducers: {
		addTable: (state, { payload }) => {
			state.tables.push(payload)
		},
		deleteTable: (state, { payload }) => {
			state.tables = state.tables.filter(table => table !== payload)
		},
	},
})
export const tablesReducer = slice.reducer
export const { addTable, deleteTable } = slice.actions
