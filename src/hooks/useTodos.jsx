import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'react-toastify'
import { fetchAllTodos } from '../services/todoApi'

export const useTodos = () => {
	const queryClient = useQueryClient()
	const { data = [], isLoading, isError } = useQuery(['todos'], fetchAllTodos)

	const { mutate: addTodo, isLoading: addLoading } = useMutation({
		mutationFn: async body => {
			const { data } = await axios.post(`https://6513d1618e505cebc2ea317b.mockapi.io/todos`, body)
			return data
		},
		onSuccess: () => {
			toast.success('You added todo')
			queryClient.invalidateQueries(['todos'])
		},
	})

	return { data, addTodo, isLoading, isError, addLoading }
}
