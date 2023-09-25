import { createReducer } from '@reduxjs/toolkit'
import { addTodo, clearSelected, clearTodos, deleteTodo, setFilterStr, toggleTodo } from './actions'

// Створюємо початковий стейт для редьюсера
const initialState = {
	todos: [{ todo: 'REACT', id: 1, completed: true }],
	filter: 'all',
}

// Створити функцію яка приймає два аргумента - стейт та екшн.
//
// Стейт обов'язково має бути ініціалізован!!!!
//
// export const todoReducer = (state = initialState, action) => {
// 	// Пробігаємо по кожному екшену котрий приходить до редьюсера і перевіряємо його тип
// 	// Якщо ми його знайшли - робимо якісь маніпуляції зі стейтом
// 	switch (action.type) {
// 		case DELETE:
// 			return {
// 				...state,
// 				todos: state.todos.filter(item => item.id !== action.payload),
// 			}
// 		case ADD_TODO:
// 			return {
// 				...state,
// 				todos: [...state.todos, action.payload],
// 			}
// 		case TOGGLE_TODO:
// 			return {
// 				...state,
// 				todos: state.todos.map(item => (item.id === action.payload ? { ...item, completed: !item.completed } : item)),
// 			}
// 		case CLEAR:
// 			return {
// 				...state,
// 				todos: [],
// 			}
// 		case CLEAR_SELECTED:
// 			return {
// 				...state,
// 				todos: state.todos.filter(item => !item.completed),
// 			}
// 		case SET_FILTER:
// 			return {
// 				...state,
// 				filter: action.payload,
// 			}
// 		// Якщо жоден з екшенів не знайден, треба повернути стейт незмінним
// 		default:
// 			return state
// 	}
// }
export const todoReducer = createReducer(initialState, builder => {
	builder
		.addCase(addTodo, (state, action) => {
			state.todos.push(action.payload)
		})
		.addCase(deleteTodo, (state, action) => {
			// const itemIndex = state.todos.findIndex(item => item.id === action.payload)
			// state.todos.splice(itemIndex, 1)
			state.todos = state.todos.filter(item => item.id !== action.payload)
		})
		.addCase(toggleTodo, (state, action) => {
			const item = state.todos.find(item => item.id === action.payload)
			item.completed = !item.completed
		})
		.addCase(clearTodos, (state, action) => {
			state.todos = []
		})
		.addCase(clearSelected, (state, action) => {
			state.todos = state.todos.filter(item => !item.completed)
		})
		.addCase(setFilterStr, (state, action) => {
			state.filter = action.payload
		})
})
