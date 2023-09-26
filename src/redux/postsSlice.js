import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	posts: [],
}
const slice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		addPost: (state, { payload }) => {
			state.posts.push(payload)
		},
	},
})

export const { addPost } = slice.actions
export const postsReducer = slice.reducer
