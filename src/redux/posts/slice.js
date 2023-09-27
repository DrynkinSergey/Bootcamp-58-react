import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { addPostThunk, deletePostThunk, fetchPosts } from './operations'

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
	extraReducers: builder => {
		builder
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.posts.push(...action.payload)
				state.loading = false
			})
			.addCase(addPostThunk.fulfilled, (state, action) => {
				state.posts.push(action.payload)
				state.loading = false
			})
			.addCase(deletePostThunk.fulfilled, (state, action) => {
				state.posts = state.posts.filter(post => post.id !== action.payload.id)
				state.loading = false
			})

			.addCase(fetchPosts.pending, (state, action) => {
				state.loading = true
				state.error = null
			})
			.addCase(deletePostThunk.pending, (state, action) => {
				state.loading = true
				state.error = null
			})
			.addCase(addPostThunk.pending, (state, action) => {
				state.loading = true
				state.error = null
			})

			.addCase(fetchPosts.rejected, (state, action) => {
				state.error = action.payload
				state.loading = false
			})
			.addCase(addPostThunk.rejected, (state, action) => {
				state.error = action.payload
				state.loading = false
			})
			.addCase(deletePostThunk.rejected, (state, action) => {
				state.error = action.payload
				state.loading = false
			})
	},
})
export const postsReducer = slice.reducer
export const { updatePost, addPost, deletePost } = slice.actions
