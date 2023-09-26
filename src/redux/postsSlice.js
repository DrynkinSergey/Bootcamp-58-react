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
		updatePost: (state, { payload }) => {
			state.posts = state.posts.map(item => (item.id === payload.id ? payload : item))
		},
	},
})

export const { addPost, deletePost, updatePost } = slice.actions
export const postsReducer = slice.reducer
