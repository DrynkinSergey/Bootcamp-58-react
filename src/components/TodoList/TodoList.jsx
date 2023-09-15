import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import todosData from './../../assets/todos.json'
import { Flex } from '../../styles/GlobalStyles'
import React, { useEffect, useState } from 'react'
import Modal from '../Modal/Modal'
import axios from 'axios'

const textAnimateFromLeft = {
	hidden: custom => ({
		opacity: 0,
		x: custom.direction,
	}),
	visible: custom => ({
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.1,
			delay: custom.delay * 0.2,
		},
	}),
	exit: {
		x: '-100%',
		opacity: 0,
		transition: {
			duration: 0.4,
		},
	},
}
// export class TodoList extends React.Component {
// 	state = {
// 		todos: todosData,
// 		currentText: '',
// 		limit: 3,
// 		isOpen: false,
// 		isOpenSecondModal: false,
// 	}
// 	inputRef = React.createRef(null)

// 	myBtnClearRef = React.createRef(null)
// 	async componentDidUpdate(_, prevState) {
// 		const { limit } = this.state
// 		if (prevState.limit !== limit) {
// 			try {
// 				const { data } = await axios.get('https://dummyjson.com/todos', {
// 					params: {
// 						limit: this.state.limit,
// 					},
// 				})
// 				this.setState({ todos: data.todos })
// 			} catch (error) {
// 				alert(error.message)
// 			}
// 		}
// 	}
// 	async componentDidMount() {
// try {
// 	const { data } = await axios.get('https://dummyjson.com/todos', {
// 		params: {
// 			limit: this.state.limit,
// 			skip: 10,
// 		},
// 	})
// 	this.setState({ todos: data.todos })
// } catch (error) {
// 	alert(error.message)
// }
// 	}
// handleChangeLimit = limit => {
// 	this.setState({ limit })
// }
// handleDeleteTodo = id => {
// 	this.setState(prev => ({ todos: prev.todos.filter(item => item.id !== id) }))
// }

// handleAddTodo = () => {
// 	const item = { id: crypto.randomUUID(), todo: this.state.currentText, completed: false }
// 	this.setState(prev => ({ todos: [...prev.todos, item], currentText: '' }))
// }

// handleChangeInput = e => {
// 	this.setState({ currentText: e.target.value })
// }

// handleToggleTodo = id => {
// 	console.log(id)
// 	this.setState(prev => ({
// 		todos: prev.todos.map(item => (item.id === id ? { ...item, completed: !item.completed } : item)),
// 	}))
// }
// handleClearTodos = () => {
// 	this.setState({ todos: [] })
// }
// handleClearTodosCompleted = () => {
// 	this.setState(prev => ({ todos: prev.todos.filter(item => !item.completed) }))
// }
// toggleModal = () => {
// 	this.setState({ isOpen: !this.state.isOpen })
// }
// toggleModalSecond = () => {
// 	this.setState({ isOpenSecondModal: !this.state.isOpenSecondModal })
// }
// openModal = () => {
// 	this.setState({ isOpen: true })
// }
// closeModal = () => {
// 	this.setState({ isOpen: false })
// }
// fetchRandom = () => {
// 	axios.get('https://dummyjson.com/todos/random').then(res => this.setState({ todos: [res.data] }))
// 	}
// 	render() {
// 		const { todos, currentText, isOpen } = this.state
// 		return (
// 			<>
// 				{isOpen && (
// 					<Modal close={this.closeModal}>
// 						Coctaile n12
// 						<button onClick={this.toggleModalSecond}>SHow</button>
// 						{this.state.isOpenSecondModal && (
// 							<Modal close={this.toggleModalSecond}>
// 								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia tenetur fuga similique ducimus magnam
// 								rem deleniti reiciendis sequi enim vero architecto nisi ex cumque mollitia, aliquid nostrum modi.
// 							</Modal>
// 						)}
// 					</Modal>
// 				)}
// 				<StyledTodoList>
// 					<Flex $height='auto'>
// 						<StyledInput
// 							animate={{ x: [100, 0, -100, 0] }}
// 							ref={this.inputRef}
// 							type='text'
// 							value={currentText}
// 							onChange={this.handleChangeInput}
// 						/>
// 						<button onClick={this.handleAddTodo}>Add</button>
// 						<button onClick={this.openModal}>Open Modal</button>
// 					</Flex>
// 					<select value={this.state.limit} onChange={e => this.handleChangeLimit(e.target.value)}>
// 						<option value='3'>3</option>
// 						<option value='5'>5</option>
// 						<option value='10'>10</option>
// 					</select>
// 					<button onClick={this.fetchRandom}>Get random TODO</button>
// 					{todos.map((item, idx) => (
// 						<StyledTodo
// 							initial='hidden'
// 							custom={{ direction: idx % 2 === 0 ? '-100%' : '100%', delay: idx }}
// 							whileInView='visible'
// 							viewport={{ once: true }}
// 							variants={textAnimateFromLeft}
// 							key={item.id}
// 						>
// 							<input onChange={() => this.handleToggleTodo(item.id)} type='checkbox' checked={item.completed} />
// 							<span>{item.todo}</span>
// 							<button onClick={() => this.handleDeleteTodo(item.id)} size='18px'>
// 								Delete
// 							</button>
// 						</StyledTodo>
// 					))}

// 					<button ref={this.myBtnClearRef} onClick={this.handleClearTodos} $border={4}>
// 						Clear all todos
// 					</button>
// 					<button onClick={this.handleClearTodosCompleted} $border={4}>
// 						Clear selected todos
// 					</button>
// 				</StyledTodoList>
// 			</>
// 		)
// 	}
// }

export const TodoList = () => {
	const [todos, setTodos] = useState(todosData)
	const [currentText, setCurrentText] = useState('')
	const [limit, setLimit] = useState(3)
	const [skip, setSkip] = useState(0)
	const [isOpen, setIsOpen] = useState(false)
	const [isOpenSecondModal, setIsOpenSecondModal] = useState(false)

	useEffect(() => {
		const fetchTodos = async () => {
			try {
				const { data } = await axios.get('https://dummyjson.com/todos', {
					params: {
						limit,
						skip,
					},
				})
				setTodos(data.todos)
			} catch (error) {
				alert(error.message)
			}
		}
		fetchTodos()
	}, [limit, skip])
	const handleChangeLimit = limit => {
		// this.setState({ limit })
		setLimit(limit)
	}
	const handleDeleteTodo = id => {
		// this.setState(prev => ({ todos: prev.todos.filter(item => item.id !== id) }))
		setTodos(prev => prev.filter(item => item.id !== id))
	}

	const handleAddTodo = () => {
		const item = { id: crypto.randomUUID(), todo: currentText, completed: false }
		setTodos(prev => [...prev, item])
		setCurrentText('')
		// this.setState(prev => ({ todos: [...prev.todos, item], currentText: '' }))
	}

	const handleChangeInput = e => {
		setCurrentText(e.target.value)
		// this.setState({ currentText: e.target.value })
	}

	const handleToggleTodo = id => {
		console.log(id)
		setTodos(prev => prev.map(item => (item.id === id ? { ...item, completed: !item.completed } : item)))
		// this.setState(prev => ({
		// 	todos: prev.todos.map(item => (item.id === id ? { ...item, completed: !item.completed } : item)),
		// }))
	}
	const handleClearTodos = () => {
		// this.setState({ todos: [] })
		setTodos([])
	}
	const handleClearTodosCompleted = () => {
		setTodos(prev => prev.filter(item => !item.completed))
		// this.setState(prev => ({ todos: prev.todos.filter(item => !item.completed) }))
	}
	const toggleModal = () => {
		setIsOpen(open => !open)
		// this.setState({ isOpen: !this.state.isOpen })
	}
	const toggleModalSecond = () => {
		setIsOpenSecondModal(open => !open)
		// this.setState({ isOpenSecondModal: !this.state.isOpenSecondModal })
	}
	const openModal = () => {
		// this.setState({ isOpen: true })
		setIsOpen(true)
	}
	const closeModal = () => {
		// this.setState({ isOpen: false })
		setIsOpen(false)
	}
	const fetchRandom = () => {
		axios.get('https://dummyjson.com/todos/random').then(({ data }) => setTodos([data]))
	}
	// axios.get('https://dummyjson.com/todos/random').then(res => this.setState({ todos: [res.data] }))

	return (
		<>
			{isOpen && (
				<Modal close={closeModal}>
					Coctaile n12
					<button onClick={toggleModalSecond}>SHow</button>
					{isOpenSecondModal && (
						<Modal close={toggleModalSecond}>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia tenetur fuga similique ducimus magnam
							rem deleniti reiciendis sequi enim vero architecto nisi ex cumque mollitia, aliquid nostrum modi.
						</Modal>
					)}
				</Modal>
			)}
			<StyledTodoList>
				<Flex $height='auto'>
					<StyledInput
						animate={{ x: [100, 0, -100, 0] }}
						// ref={inputRef}
						type='text'
						value={currentText}
						onChange={handleChangeInput}
					/>
					<button onClick={handleAddTodo}>Add</button>
					<button onClick={openModal}>Open Modal</button>
				</Flex>
				<select value={limit} onChange={e => handleChangeLimit(e.target.value)}>
					<option value='3'>3</option>
					<option value='5'>5</option>
					<option value='10'>10</option>
				</select>
				<button onClick={fetchRandom}>Get random TODO</button>
				<button onClick={() => setSkip(10)}>Set skip 10</button>
				{todos.map((item, idx) => (
					<StyledTodo
						initial='hidden'
						custom={{ direction: idx % 2 === 0 ? '-100%' : '100%', delay: idx }}
						whileInView='visible'
						viewport={{ once: true }}
						variants={textAnimateFromLeft}
						key={item.id}
					>
						<input onChange={() => handleToggleTodo(item.id)} type='checkbox' checked={item.completed} />
						<span>{item.todo}</span>
						<button onClick={() => handleDeleteTodo(item.id)} size='18px'>
							Delete
						</button>
					</StyledTodo>
				))}

				<button onClick={handleClearTodos} $border={4}>
					Clear all todos
				</button>
				<button onClick={handleClearTodosCompleted} $border={4}>
					Clear selected todos
				</button>
			</StyledTodoList>
		</>
	)
}
