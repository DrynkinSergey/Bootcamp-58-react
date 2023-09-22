import { useDispatch, useSelector } from 'react-redux'
import { addTodo, clearSelected, clearTodos, deleteTodo, setFilterStr, toggleTodo } from '../redux/todoList/actions'
import { toast } from 'react-toastify'
import { selectFilter, selectTodos } from '../redux/todoList/selectors'

export const useTodos = () => {
	const todos = useSelector(selectTodos)
	const filter = useSelector(selectFilter)
	const dispatch = useDispatch()

	const hanldeDeleteTodo = id => {
		dispatch(deleteTodo(id))
		toast.success('You delete todo')
	}
	const handleAddTodo = title => {
		dispatch(addTodo(title))
	}
	const handleToggle = id => {
		dispatch(toggleTodo(id))
	}
	const clearAllTodos = () => {
		dispatch(clearTodos())
	}
	const clearSelectedTodos = () => {
		dispatch(clearSelected())
	}
	const setFilter = filterName => {
		dispatch(setFilterStr(filterName))
	}
	const getFilteredData = (data, filter) => {
		switch (filter) {
			case 'all':
				return data
			case 'active':
				return data.filter(item => !item.completed)
			case 'completed':
				return data.filter(item => item.completed)

			default:
				break
		}
	}
	return {
		clearSelectedTodos,
		clearAllTodos,
		handleAddTodo,
		handleToggle,
		setFilter,
		hanldeDeleteTodo,
		todos: getFilteredData(todos, filter),
	}
}
