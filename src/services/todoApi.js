import axios from 'axios'

export const fetchAllTodos = async () => {
	const { data } = await axios.get('https://6513d1618e505cebc2ea317b.mockapi.io/todos')
	return data
}
