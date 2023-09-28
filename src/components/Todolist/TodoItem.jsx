import { Button, Card, Checkbox, Label, Spinner } from 'flowbite-react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodoThunk, toggleTodoThunk } from '../../redux/todoList/operations'
import clsx from 'clsx'
import { selectCurrent, selectLoading } from '../../redux/todoList/selectors'
import { useId } from 'react'

export default function TodoItem({ id, title, completed }) {
	const dispatch = useDispatch()
	const handleDelete = () => {
		dispatch(deleteTodoThunk(id))
	}
	const loading = useSelector(selectLoading)
	const current = useSelector(selectCurrent)
	const idInput = useId()
	return (
		<Card className={clsx('max-w-sm', completed ? 'bg-gray-200' : 'bg-white')}>
			<h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
				<p className={completed ? 'line-through' : ''}>{title}</p>
			</h5>
			<div className='flex items-center gap-2'>
				{loading && current === id ? (
					<>
						<Spinner aria-label='Left-aligned spinner example' />
						<Label htmlFor=''>loading...</Label>
					</>
				) : (
					<>
						<Checkbox
							onChange={() => dispatch(toggleTodoThunk({ id, title, completed }))}
							id={idInput}
							checked={completed}
						/>
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
