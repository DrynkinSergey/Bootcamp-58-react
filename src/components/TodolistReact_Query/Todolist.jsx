import AddForm from './AddForm'
import TodoItem from './TodoItem'
import { useTodos } from '../../hooks/useTodos'
import { TextInput } from 'flowbite-react'

const Todolist = () => {
	const { isError, isLoading, data, value, setValue } = useTodos()

	// const [todos, setTodos] = useState([])
	// const [isLoading, setLoading] = useState(false)
	// const [isError, setError] = useState(false)

	// useEffect(() => {
	// 	const getTodos = async () => {
	// 		setLoading(true)
	// 		try {
	// 			const data = await fetchAllTodos()
	// 			setTodos(data)
	// 		} catch (e) {
	// 			setError(e)
	// 		} finally {
	// 			setLoading(false)
	// 		}
	// 	}
	// 	getTodos()
	// }, [])

	if (isError) {
		return <h1>Error</h1>
	}
	return (
		<div>
			<AddForm />
			<TextInput value={value} onChange={e => setValue(e.target.value)} placeholder='Type the text....' required />
			{/* <Filter /> */}
			{isLoading && <h1>Loading</h1>}
			<ul className='grid grid-cols-3 py-5 px-2 gap-2 max-w-5xl mx-auto'>
				{data?.map(item => (
					<TodoItem key={item.id} {...item} />
				))}
			</ul>
		</div>
	)
}

export default Todolist
