import { Button, Card, Checkbox, Label, Spinner } from 'flowbite-react'
import clsx from 'clsx'
import { useId } from 'react'
import { useDeleteTodoMutation, useToggleTodoMutation } from '../../redux/RTKQuery/todoApi'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function TodoItem({ id, title, completed }) {
	const idInput = useId()
	const queryClient = useQueryClient()
	const handleDelete = () => {
		// deleteTodo(id)
		mutate(id)
	}
	const { mutate } = useMutation({
		mutationFn: async id => {
			const { data } = await axios.delete(`https://6513d1618e505cebc2ea317b.mockapi.io/todos/${id}`)
			return data
		},
		onSuccess: () => {
			toast.info('Todo was deleted')
			queryClient.invalidateQueries(['todos'])
		},
	})
	return (
		<Card className={clsx('max-w-sm', completed ? 'bg-gray-200' : 'bg-white')}>
			<h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
				<p className={completed ? 'line-through' : ''}>{title}</p>
			</h5>
			<div className='flex items-center gap-2'>
				{false === id ? (
					<>
						<Spinner aria-label='Left-aligned spinner example' />
						<Label htmlFor=''>loading...</Label>
					</>
				) : (
					<>
						{/* <Checkbox onChange={() => toggleTodo({ id, title, completed })} id={idInput} checked={completed} /> */}
						<Label htmlFor={idInput}>{completed ? 'Done' : 'Set completed'}</Label>
					</>
				)}
			</div>

			<Button onClick={handleDelete}>
				<p>Delete todo</p>
			</Button>
		</Card>
	)
}
