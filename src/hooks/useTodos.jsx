import { useDispatch, useSelector } from 'react-redux'
import { addTodo, clearSelected, clearTodos, deleteTodo, toggleTodo } from '../redux/todoList/actions'
import { toast } from 'react-toastify'

export const useTodos = () => {
	const { todos } = useSelector(state => state.todos)
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
	return { clearSelectedTodos, clearAllTodos, handleAddTodo, handleToggle, hanldeDeleteTodo, todos }
}
