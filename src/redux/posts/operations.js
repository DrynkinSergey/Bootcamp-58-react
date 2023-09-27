import axios from 'axios'
import { addPost, deletePost, getPosts, isError, isFetching, updatePost } from './slice'

axios.defaults.baseURL = 'https://6513d1618e505cebc2ea317b.mockapi.io/'

export const fetchPosts = () => async dispatch => {
	try {
		dispatch(isFetching())
		const { data } = await axios.get('posts')
		dispatch(getPosts(data))
	} catch (error) {
		dispatch(isError(error.message))
	}
}

export const addPostThunk = body => async dispatch => {
	try {
		dispatch(isFetching(true))
		const { data } = await axios.post('posts', body)
		dispatch(addPost(data))
	} catch (error) {
		dispatch(isError(error.message))
	} finally {
		dispatch(isFetching(false))
	}
}

export const deletePostThunk = id => async dispatch => {
	try {
		const { data } = await axios.delete(`posts/${id}`)
		dispatch(deletePost(data.id))
		console.log(data)
	} catch (error) {}
}

export const updatePostThunk = body => async dispatch => {
	const { data } = await axios.put(`posts/${body.id}`, body)
	dispatch(updatePost(data))
	console.log(data)
	// dispatch()
}
