import axios from 'axios'

export const fetchAllTodos = async params => {
	const { data } = await axios.get('https://6513d1618e505cebc2ea317b.mockapi.io/todos', {
		params: {
			limit: 3,
			page: 1,
			...params,
		},
	})
	return data
}
