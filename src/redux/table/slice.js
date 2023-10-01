import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
	name: 'table',
	initialState: {
		tableData: [
			{ id: '1', title: 'Buy book', table: 'todo' },
			{ id: '2', title: 'Buy phone', table: 'done' },
			{ id: '3', title: 'Buy icecream', table: 'todo' },
		],
	},
	reducers: {
		addToTable: (state, action) => {
			state.tableData.push(action.payload)
		},
		deleteFromTable: (state, action) => {
			state.tableData = state.tableData.filter(item => item.id !== action.payload)
		},
		moveTo: (state, { payload }) => {
			state.tableData = state.tableData.map(item => (item.id === payload.id ? { ...item, table: payload.table } : item))
		},
	},
})
export const tableDataReducer = slice.reducer
export const { addToTable, deleteFromTable, moveTo } = slice.actions
