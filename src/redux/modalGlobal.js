import { createSlice } from '@reduxjs/toolkit'
import { deletePost } from './postsSlice'

const slice = createSlice({
	name: 'modal',
	initialState: {
		isOpen: false,
		isAgree: false,
	},
	reducers: {
		open: state => {
			state.isOpen = true
			state.isAgree = false
		},
		close: state => {
			state.isOpen = false
		},
		agree: state => {
			state.isAgree = true
			state.isOpen = false
		},
	},
	extraReducers: builder => {
		builder.addCase(deletePost, state => {
			state.isAgree = false
		})
	},
})
export const modalReducer = slice.reducer
export const { open, close, agree } = slice.actions
