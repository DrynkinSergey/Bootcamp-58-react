import { StyledButton } from '../Counter/Counter.styled'
import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import todosData from './../../assets/todos.json'
import { Flex } from '../../styles/GlobalStyles'
import React from 'react'
import { nanoid } from 'nanoid'
import API, { sum } from '../test'

export class TodoList extends React.Component {
	state = {
		todos: todosData,
		currentText: '',
	}
	handleDeleteTodo = id => {
		// const newTodos = this.state.todos.filter(item => item.id !== id)
		// console.log(newTodos)
		// this.setState(prev => ({ todos: newTodos }))
		API.sum()
		this.setState(prev => ({ todos: prev.todos.filter(item => item.id !== id) }))
	}

	handleAddTodo = () => {
		const item = { id: crypto.randomUUID(), todo: this.state.currentText, completed: false }
		this.setState(prev => ({ todos: [...prev.todos, item], currentText: '' }))
	}

	handleChangeInput = e => {
		this.setState({ currentText: e.target.value })
	}

	handleToggleTodo = id => {
		console.log(id)
		this.setState(prev => ({
			todos: prev.todos.map(item => (item.id === id ? { ...item, completed: !item.completed } : item)),
		}))
	}
	handleClearTodos = () => {
		this.setState({ todos: [] })
	}
	handleClearTodosCompleted = () => {
		this.setState(prev => ({ todos: prev.todos.filter(item => !item.completed) }))
	}

	render() {
		const { todos, currentText } = this.state
		return (
			<>
				<StyledTodoList>
					<Flex $height='auto'>
						<StyledInput type='text' value={currentText} onChange={this.handleChangeInput} />
						<StyledButton onClick={this.handleAddTodo}>Add</StyledButton>
					</Flex>
					{todos.map(item => (
						<StyledTodo key={item.id}>
							<input onChange={() => this.handleToggleTodo(item.id)} type='checkbox' checked={item.completed} />
							<span>{item.todo}</span>
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
