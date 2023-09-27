import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

axios.defaults.baseURL = 'https://6513d1618e505cebc2ea317b.mockapi.io/'

export const fetchPosts = createAsyncThunk('fetchPosts', async (_, thunkAPI) => {
	try {
		const res = await axios.get('posts')
		return res.data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})
export const addPostThunk = createAsyncThunk('addPost', async (body, thunkAPI) => {
	const posts = thunkAPI.getState().posts.posts
	const item = posts.find(post => post.title === body.title)
	if (item) {
		toast.error('ERrror')
		return thunkAPI.rejectWithValue('Post is exist')
	}

	try {
		const { data } = await axios.post('posts', body)
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const deletePostThunk = createAsyncThunk('deletePost', async (id, thunkAPI) => {
	try {
		const { data } = await axios.delete(`posts/${id}`)
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const updatePostThunk = createAsyncThunk('updatePost', async (body, thunkAPI) => {
	try {
		const { data } = await axios.put(`posts/${body.id}`, body)
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

// export const fetchPosts = () => async dispatch => {
// 	try {
// 		dispatch(isFetching())
// 		const { data } = await axios.get('posts')
// 		dispatch(getPosts(data))
// 	} catch (error) {
// 		dispatch(isError(error.message))
// 	}
// }

// export const addPostThunk = body => async dispatch => {
// 	try {
// 		dispatch(isFetching(true))
// 		const { data } = await axios.post('posts', body)
// 		dispatch(addPost(data))
// 	} catch (error) {
// 		dispatch(isError(error.message))
// 	} finally {
// 		dispatch(isFetching(false))
// 	}
// }

// export const deletePostThunk = id => async dispatch => {
// 	try {
// 		const { data } = await axios.delete(`posts/${id}`)
// 		dispatch(deletePost(data.id))
// 		console.log(data)
// 	} catch (error) {}
// }

// export const updatePostThunk = body => async dispatch => {
// 	const { data } = await axios.put(`posts/${body.id}`, body)
// 	dispatch(updatePost(data))
// 	console.log(data)
// 	// dispatch()
// }
