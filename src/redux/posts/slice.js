import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
	posts: [],
	loading: false,
	page: 1,
}

export const slice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		getPosts: (state, action) => {
			state.posts.push(...action.payload)
		},
		addPost: (state, action) => {
			const isExist = state.posts.find(post => post.title === action.payload.title)
			if (!isExist) {
				state.posts.push(action.payload)
			} else {
				toast.error(`Post with title: ${action.payload.title} is exist`)
			}
		},
		deletePost: (state, action) => {
			state.posts = state.posts.filter(post => post.id !== action.payload)
		},
	},
})
export const postsReducer = slice.reducer
export const { getPosts, addPost, deletePost } = slice.actions
