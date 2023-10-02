import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
	name: 'tables',
	initialState: {
		tables: ['todo', 'inProgress', 'done', 'test'],
	},
	reducers: {},
})
export const tablesReducer = slice.reducer
