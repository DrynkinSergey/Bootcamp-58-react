import { StyledButton } from '../Counter/Counter.styled'
import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import todos from './../../assets/todos.json'
import { Flex } from '../../styles/GlobalStyles'
import React from 'react'

export const TodoList = () => {
	return (
		<>
			<StyledTodoList>
				<Flex $height='auto'>
					<StyledInput type='text' />
					<StyledButton>Add</StyledButton>
				</Flex>
				{todos.map(item => (
					<StyledTodo>
						<input type='checkbox' />
						<span>{item.todo}</span>
						<StyledButton size='18px'>Delete</StyledButton>
					</StyledTodo>
				))}
				<button>Clear</button>
			</StyledTodoList>
		</>
	)
}
