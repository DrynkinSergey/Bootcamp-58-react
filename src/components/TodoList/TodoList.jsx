import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import { Flex } from '../../styles/GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, clearSelected, clearTodos, deleteTodo, toggleTodo } from '../../redux/todoList/actions'
import { toast } from 'react-toastify'
import AddForm from './AddForm'

export const TodoList = () => {
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

	return (
		<>
			<StyledTodoList>
				<AddForm addTodo={handleAddTodo} />
				{todos.map((item, idx) => (
					<StyledTodo key={item.id}>
						<input onChange={() => handleToggle(item.id)} type='checkbox' checked={item.completed} />
						<span>{item.todo}</span>
						<button size='18px' onClick={() => hanldeDeleteTodo(item.id)}>
							Delete
						</button>
					</StyledTodo>
				))}

				<button onClick={clearAllTodos} $border={4}>
					Clear all todos
				</button>
				<button onClick={clearSelectedTodos} $border={4}>
					Clear selected todos
				</button>
			</StyledTodoList>
		</>
	)
}
