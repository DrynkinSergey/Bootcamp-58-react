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
		moveRight: (state, { payload }) => {
			const movedItem = state.posts.findIndex(item => item.id === payload)
			const nextItem = state.posts[movedItem + 1]
			const temp = state.posts[movedItem]
			state.posts.splice(movedItem, 1, nextItem)
			state.posts[movedItem + 1] = temp
		},
		moveLeft: (state, { payload }) => {
			const movedItem = state.posts.findIndex(item => item.id === payload)
			const nextItem = state.posts[movedItem - 1]
			const temp = state.posts[movedItem]
			state.posts.splice(movedItem, 1, nextItem)
			state.posts[movedItem - 1] = temp
		},
	},
})

export const { addPost, deletePost, updatePost, moveRight, moveLeft } = slice.actions
export const postsReducer = slice.reducer
