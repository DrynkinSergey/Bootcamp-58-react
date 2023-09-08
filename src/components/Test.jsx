import usersData from '../assets/users.json'
import React from 'react'
import { StyledInput, StyledTodo, StyledTodoList } from './TodoList/TodoList.styled'
import { Flex, StyledButton } from './Counter/Counter.styled'

export class Test extends React.Component {
	state = {
		todos: usersData,
		currentText: '',
	}

	handleChangeInput = e => {
		this.setState({ currentText: e.target.value })
	}
	getFilteredData = () => {
		return this.state.todos.filter(item => item.name.toLowerCase().includes(this.state.currentText.toLowerCase()))
	}

	render() {
		const { todos, currentText } = this.state
		const filteredData = this.getFilteredData()
		return (
			<>
				<StyledTodoList>
					<Flex $height='auto'>
						<StyledInput type='text' value={currentText} onChange={this.handleChangeInput} />
					</Flex>
					{filteredData.map(item => (
						<StyledTodo key={item.id}>
							<input onChange={() => this.handleToggleTodo(item.id)} type='checkbox' checked={item.completed} />
							<span>{item.name}</span>
							<StyledButton onClick={() => this.handleDeleteTodo(item.id)} size='18px'>
								Delete
							</StyledButton>
						</StyledTodo>
					))}
					<StyledButton onClick={this.handleClearTodos} $border={4}>
						Clear all todos
					</StyledButton>
					<StyledButton onClick={this.handleClearTodosCompleted} $border={4}>
						Clear selected todos
					</StyledButton>
				</StyledTodoList>
			</>
		)
	}
}

// export const TodoList = () => {
// 	return (
// 		<>
// 			<StyledTodoList>
// 				<Flex $height='auto'>
// 					<StyledInput type='text' />
// 					<StyledButton>Add</StyledButton>
// 				</Flex>
// 				{todos.map(item => (
// 					<StyledTodo>
// 						<input type='checkbox' />
// 						<span>{item.todo}</span>
// 						<StyledButton size='18px'>Delete</StyledButton>
// 					</StyledTodo>
// 				))}
// 				<StyledButton $border={4}>Clear all todos</StyledButton>
// 			</StyledTodoList>
// 		</>
// 	)
// }
