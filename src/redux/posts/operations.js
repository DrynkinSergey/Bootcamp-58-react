import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'https://6513d1618e505cebc2ea317b.mockapi.io/'

export const fetchPosts = createAsyncThunk('fetchPosts', async (_, thunkAPI) => {
	const res = await axios.get('posts')
	if (res.statusText !== 'OK') {
		return thunkAPI.rejectWithValue('Smth went wrong')
	}
	return res.data
})
export const addPostThunk = createAsyncThunk('addPost', async (body, thunkAPI) => {
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
