import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import AddForm from './AddForm'
import { useTodos } from '../../hooks/useTodos'

export const TodoList = () => {
	const { clearSelectedTodos, clearAllTodos, handleAddTodo, handleToggle, hanldeDeleteTodo, todos } = useTodos()
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
