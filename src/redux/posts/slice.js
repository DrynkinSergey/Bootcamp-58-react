import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { addPostThunk, deletePostThunk, fetchPosts, updatePostThunk } from './operations'

const initialState = {
	posts: [],
	loading: false,
	error: null,
	page: 1,
}

export const slice = createSlice({
	name: 'posts',
	initialState,

	extraReducers: builder => {
		builder
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.posts.push(...action.payload)
			})
			.addCase(addPostThunk.fulfilled, (state, action) => {
				state.posts.push(action.payload)
			})
			.addCase(deletePostThunk.fulfilled, (state, action) => {
				state.posts = state.posts.filter(post => post.id !== action.payload.id)
			})
			.addCase(updatePostThunk.fulfilled, (state, action) => {
				state.posts = state.posts.map(item => (item.id === action.payload.id ? action.payload : item))
			})

			.addMatcher(
				isAnyOf(fetchPosts.fulfilled, updatePostThunk.fulfilled, deletePostThunk.fulfilled, addPostThunk.fulfilled),
				(state, action) => {
					state.loading = false
				}
			)
			.addMatcher(
				isAnyOf(fetchPosts.pending, updatePostThunk.pending, deletePostThunk.pending, addPostThunk.pending),
				(state, action) => {
					state.loading = true
					state.error = null
				}
			)
			.addMatcher(
				isAnyOf(fetchPosts.rejected, updatePostThunk.rejected, deletePostThunk.rejected, addPostThunk.rejected),
				(state, action) => {
					state.error = action.payload
					state.loading = false
				}
			)
	},
})
export const postsReducer = slice.reducer
export const { updatePost, addPost, deletePost } = slice.actions
