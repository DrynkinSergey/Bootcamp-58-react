import axios from 'axios'

export const getAllUsers = async () => {
	const { data } = await axios.get('https://dummyjson.com/users')
	return data.users
}
export const getUserById = async id => {
	const { data } = await axios.get(`https://dummyjson.com/users/${id}`)
	return data
}
export const getTodos = async () => {
	const { data } = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
	return data
}
export const getPostsByUserID = async id => {
	const { data } = await axios.get(`https://dummyjson.com/posts/user/${id}`)
	return data.posts
}
export const getPostsByQuery = async query => {
	const { data } = await axios.get(`https://dummyjson.com/posts/search?q=${query}`)
	return data.posts
}
export const getPostById = async postId => {
	const { data } = await axios.get(`https://dummyjson.com/posts/${postId}`)
	return data
}
export const getPostComments = async postId => {
	const { data } = await axios.get(`https://dummyjson.com/posts/${postId}/comments`)
	return data.comments
}
