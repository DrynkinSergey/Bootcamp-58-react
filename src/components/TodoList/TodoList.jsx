import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import { Flex } from '../../styles/GlobalStyles'

export const TodoList = () => {
	return (
		<>
			<StyledTodoList>
				<Flex $height='auto'>
					<StyledInput animate={{ x: [100, 0, -100, 0] }} type='text' />
					<button>Add</button>
				</Flex>

				{[].map((item, idx) => (
					<StyledTodo key={item.id}>
						<input type='checkbox' checked={item.completed} />
						<span>{item.todo}</span>
						<button size='18px'>Delete</button>
					</StyledTodo>
				))}

				<button $border={4}>Clear all todos</button>
				<button $border={4}>Clear selected todos</button>
			</StyledTodoList>
		</>
	)
}
