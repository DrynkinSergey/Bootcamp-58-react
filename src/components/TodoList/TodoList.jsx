import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import AddForm from './AddForm'
import { useTodos } from '../../hooks/useTodos'
import Filter from '../Filter/Filter'

export const TodoList = () => {
	const { clearSelectedTodos, clearAllTodos, handleAddTodo, handleToggle, hanldeDeleteTodo, todos, setFilter } =
		useTodos()
	const access = 'dasdfsf2321sd' === process.env.REACT_APP_MY_SECRET_KEY

	return (
		<>
			<StyledTodoList>
				<AddForm addTodo={handleAddTodo} />
				<Filter setFilter={setFilter} />
				{todos.map((item, idx) => (
					<StyledTodo key={item.id}>
						<input onChange={() => handleToggle(item.id)} type='checkbox' checked={item.completed} />
						<span>{item.todo}</span>
						<button onClick={() => hanldeDeleteTodo(item.id)}>Delete</button>
					</StyledTodo>
				))}

				<button onClick={clearAllTodos}>Clear all todos</button>
				<button onClick={clearSelectedTodos}>Clear selected todos</button>
			</StyledTodoList>
		</>
	)
}
