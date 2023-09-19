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
