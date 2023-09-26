import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
	name: 'filter',
	initialState: '',
	reducers: {
		setFilter: (state, { payload }) => {
			return (state = payload)
		},
	},
})
export const filterSlice = slice.reducer
export const { setFilter } = slice.actions
