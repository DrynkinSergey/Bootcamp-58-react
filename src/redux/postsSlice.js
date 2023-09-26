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
		deletePost: (state, { payload }) => {
			state.posts = state.posts.filter(item => item.id !== payload)
		},
	},
})

export const { addPost, deletePost } = slice.actions
export const postsReducer = slice.reducer
