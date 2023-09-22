import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import { Flex } from '../../styles/GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from '../../redux/todoList/actions'
import { toast } from 'react-toastify'

export const TodoList = () => {
	const { todos } = useSelector(state => state.todos)
	const dispatch = useDispatch()
	const hanldeDeleteTodo = id => {
		dispatch(deleteTodo(id))
		toast.success('You delete todo')
	}
	return (
		<>
			<StyledTodoList>
				<Flex $height='auto'>
					<StyledInput type='text' />
					<button>Add</button>
				</Flex>

				{todos.map((item, idx) => (
					<StyledTodo key={item.id}>
						<input type='checkbox' checked={item.completed} />
						<span>{item.todo}</span>
						<button size='18px' onClick={() => hanldeDeleteTodo(item.id)}>
							Delete
						</button>
					</StyledTodo>
				))}

				<button $border={4}>Clear all todos</button>
				<button $border={4}>Clear selected todos</button>
			</StyledTodoList>
		</>
	)
}
