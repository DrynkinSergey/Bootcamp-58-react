import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
	posts: [],
	loading: false,
	error: null,
	page: 1,
}

export const slice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		getPosts: (state, action) => {
			state.posts.push(...action.payload)
			state.loading = false
		},
		isFetching: (state, action) => {
			state.loading = action.payload
			state.error = null
		},
		isError: (state, action) => {
			state.loading = false
			state.error = action.payload
		},
		addPost: (state, action) => {
			const isExist = state.posts.find(post => post.title === action.payload.title)
			if (!isExist) {
				state.posts.push(action.payload)
			} else {
				toast.error(`Post with title: ${action.payload.title} is exist`)
			}
		},
		updatePost: (state, action) => {
			state.posts = state.posts.map(item => (item.id === action.payload.id ? action.payload : item))
		},
		deletePost: (state, action) => {
			state.posts = state.posts.filter(post => post.id !== action.payload)
		},
	},
})
export const postsReducer = slice.reducer
export const { getPosts, updatePost, addPost, deletePost, isFetching, isError } = slice.actions
