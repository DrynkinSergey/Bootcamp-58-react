import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
	name: 'tables',
	initialState: {
		tables: ['todo', 'inProgress', 'done'],
	},
	reducers: {},
})
export const tablesReducer = slice.reducer
