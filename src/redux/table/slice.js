import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
	name: 'table',
	initialState: {
		tableData: [
			{ id: 1, title: 'Buy new car', table: 'todo' },
			{ id: 2, title: 'Feed the fish', table: 'done' },
			{ id: 3, title: 'Learn react', table: 'done' },
			{ id: 4, title: 'Redux', table: 'todo' },
			{ id: 5, title: 'Js', table: 'done' },
		],
		reducers: {},
	},
})

export const tableReducer = slice.reducer
