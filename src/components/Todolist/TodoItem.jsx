import { Button, Card } from 'flowbite-react'
import { useDispatch } from 'react-redux'
import { deleteTodoThunk } from '../../redux/todoList/operations'

export default function TodoItem({ id, title }) {
	const dispatch = useDispatch()
	const handleDelete = () => {
		dispatch(deleteTodoThunk(id))
	}
	return (
		<Card className='max-w-sm'>
			<h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
				<p>{title}</p>
			</h5>

			<Button onClick={handleDelete}>
				<p>Delete todo</p>
			</Button>
		</Card>
	)
}
