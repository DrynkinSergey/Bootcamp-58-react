import { StyledButton } from '../Counter/Counter.styled'
import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import todosData from './../../assets/todos.json'
import { Flex } from '../../styles/GlobalStyles'
import React from 'react'
import { nanoid } from 'nanoid'
import API, { sum } from '../test'
import Modal from '../Modal/Modal'

export class TodoList extends React.Component {
	state = {
		todos: todosData,
		currentText: '',
		isOpen: false,
		isOpenSecondModal: false,
	}
	inputRef = React.createRef(null)

	myBtnClearRef = React.createRef(null)
	componentDidUpdate(_, prevState) {
		const { todos } = this.state
		if (prevState.todos.length !== todos.length) {
			window.localStorage.setItem('Todos', JSON.stringify(todos))
		}
	}
	componentDidMount() {
		const items = JSON.parse(window.localStorage.getItem('Todos'))
		if (items.length) {
			this.setState({ todos: items })
		}
		console.log(this.myBtnClearRef)
		this.inputRef.current.focus()
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
	toggleModal = () => {
		this.setState({ isOpen: !this.state.isOpen })
	}
	toggleModalSecond = () => {
		this.setState({ isOpenSecondModal: !this.state.isOpenSecondModal })
	}
	openModal = () => {
		this.setState({ isOpen: true })
	}
	closeModal = () => {
		this.setState({ isOpen: false })
	}
	render() {
		const { todos, currentText, isOpen } = this.state
		return (
			<>
				{isOpen && (
					<Modal close={this.closeModal}>
						Coctaile n12
						<button onClick={this.toggleModalSecond}>SHow</button>
						{this.state.isOpenSecondModal && (
							<Modal close={this.toggleModalSecond}>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia tenetur fuga similique ducimus magnam
								rem deleniti reiciendis sequi enim vero architecto nisi ex cumque mollitia, aliquid nostrum modi.
							</Modal>
						)}
					</Modal>
				)}
				<StyledTodoList>
					<Flex $height='auto'>
						<StyledInput ref={this.inputRef} type='text' value={currentText} onChange={this.handleChangeInput} />
						<StyledButton onClick={this.handleAddTodo}>Add</StyledButton>
						<StyledButton onClick={this.openModal}>Open Modal</StyledButton>
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
					<StyledButton ref={this.myBtnClearRef} onClick={this.handleClearTodos} $border={4}>
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
