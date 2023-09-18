import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import todosData from './../../assets/todos.json'
import { Flex } from '../../styles/GlobalStyles'
import React, { useContext, useEffect, useReducer, useState } from 'react'
import Modal from '../Modal/Modal'
import axios from 'axios'
import { ThemeContext } from '../../context/ThemeContext'

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

export const TodoList = () => {
	// const [todos, setTodos] = useState(todosData)
	// const [currentText, setCurrentText] = useState('')
	// const [limit, setLimit] = useState(3)
	// const [skip, setSkip] = useState(0)
	// const [isOpen, setIsOpen] = useState(false)
	// const [isOpenSecondModal, setIsOpenSecondModal] = useState(false)

	// 1. Створюємо початковий стан для хука useReducer
	const initialState = {
		todos: [],
		currentText: '',
		limit: 3,
		skip: 0,
		isOpen: false,
		isOpenSecondModal: false,
	}

	// 2. Створюємо функцію редьюсер для управління станом

	const todoReducer = (state, action) => {
		switch (action.type) {
			case 'SET_TODOS':
				return {
					...state,
					todos: action.payload,
				}
			case 'CHANGE_LIMIT':
				return {
					...state,
					limit: action.payload,
				}
			case 'DELETE':
				return {
					...state,
					todos: state.todos.filter(item => item.id !== action.payload),
				}
			case 'ADD':
				return {
					...state,
					todos: [...state.todos, action.payload],
				}
			case 'CHANGE_TEXT':
				return {
					...state,
					currentText: action.payload,
				}
			case 'TOGGLE':
				return {
					...state,
					todos: state.todos.map(item => (item.id === action.payload ? { ...item, completed: !item.completed } : item)),
				}
			case 'CLEAR_TODOS':
				return {
					...state,
					todos: [],
				}
			case 'CLEAR_SELECTED':
				return {
					...state,
					todos: state.todos.filter(item => !item.completed),
				}
			case 'TOGGLE_MODAL':
				return {
					...state,
					isOpen: !state.isOpen,
				}
			case 'OPEN_MODAL':
				return {
					...state,
					isOpen: true,
				}
			case 'CLOSE_MODAL':
				return {
					...state,
					isOpen: false,
				}
			case 'GET_RANDOM':
				return {
					...state,
					todos: action.payload,
				}
			default:
				return state
		}
	}

	// 3. Використовуємо хук useReducer, передаємо функцію для обробки стейта і сам стейт

	const [state, dispatch] = useReducer(todoReducer, initialState)
	// 4. Деструктуризація стейта
	const { todos, limit, skip, isOpen, isOpenSecondModal, currentText } = state

	const { theme } = useContext(ThemeContext)

	useEffect(() => {
		const fetchTodos = async () => {
			try {
				const { data } = await axios.get('https://dummyjson.com/todos', {
					params: {
						limit,
						skip,
					},
				})
				// setTodos(data.todos)
				dispatch({ type: 'SET_TODOS', payload: data.todos })
			} catch (error) {
				alert(error.message)
			}
		}
		fetchTodos()
	}, [limit, skip])
	const handleChangeLimit = limit => {
		// setLimit(limit)
		dispatch({ type: 'CHANGE_LIMIT', payload: limit })
	}
	const handleDeleteTodo = id => {
		// setTodos(prev => prev.filter(item => item.id !== id))
		dispatch({ type: 'DELETE', payload: id })
	}

	const handleAddTodo = () => {
		const item = { id: crypto.randomUUID(), todo: currentText, completed: false }
		dispatch({ type: 'ADD', payload: item })
		// setTodos(prev => [...prev, item])
		// setCurrentText('')
	}

	const handleChangeInput = e => {
		// setCurrentText(e.target.value)
		dispatch({ type: 'CHANGE_TEXT', payload: e.target.value })
	}

	const handleToggleTodo = id => {
		console.log(id)
		dispatch({ type: 'TOGGLE', payload: id })
		// setTodos(prev => prev.map(item => (item.id === id ? { ...item, completed: !item.completed } : item)))
	}
	const handleClearTodos = () => {
		dispatch({ type: 'CLEAR_TODOS' })
		// setTodos([])
	}
	const handleClearTodosCompleted = () => {
		// setTodos(prev => prev.filter(item => !item.completed))
		dispatch({ type: 'CLEAR_SELECTED' })
	}
	const toggleModal = () => {
		// setIsOpen(open => !open)
		dispatch({ type: 'TOGGLE_MODAL' })
	}
	const toggleModalSecond = () => {
		// setIsOpenSecondModal(open => !open)
	}
	const openModal = () => {
		// setIsOpen(true)
		dispatch({ type: 'OPEN_MODAL' })
	}
	const closeModal = () => {
		// setIsOpen(false)
		dispatch({ type: 'CLOSE_MODAL' })
	}
	const fetchRandom = () => {
		axios
			.get('https://dummyjson.com/todos/random')
			.then(({ data }) => dispatch({ type: 'GET_RANDOM', payload: [data] }))
	}

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
				{/* <button onClick={() => setSkip(10)}>Set skip 10</button> */}
				{todos.map((item, idx) => (
					<StyledTodo
						$bg={theme}
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
