import AddForm from './AddForm'
import TodoItem from './TodoItem'
import { useTodos } from '../../hooks/useTodos'

const Todolist = () => {
	const { isError, isLoading, data } = useTodos()

	if (isError) {
		return <h1>Error</h1>
	}
	return (
		<div>
			<AddForm />
			{/* <Filter /> */}
			{isLoading && <h1>Loading</h1>}
			<ul className='grid grid-cols-3 py-5 px-2 gap-2 max-w-5xl mx-auto'>
				{data.map(item => (
					<TodoItem key={item.id} {...item} />
				))}
			</ul>
		</div>
	)
}

export default Todolist
