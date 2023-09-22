import { ADD_TODO, CLEAR, CLEAR_SELECTED, DELETE, TOGGLE_TODO } from './constants'

// Створюємо початковий стейт для редьюсера
const initialState = {
	todos: [{ todo: 'REACT', id: 1, completed: true }],
	filter: 'all',
}

// Створити функцію яка приймає два аргумента - стейт та екшн.
//
// Стейт обов'язково має бути ініціалізован!!!!
//
export const todoReducer = (state = initialState, action) => {
	// Пробігаємо по кожному екшену котрий приходить до редьюсера і перевіряємо його тип
	// Якщо ми його знайшли - робимо якісь маніпуляції зі стейтом
	switch (action.type) {
		case DELETE:
			return {
				...state,
				todos: state.todos.filter(item => item.id !== action.payload),
			}
		case ADD_TODO:
			return {
				...state,
				todos: [...state.todos, action.payload],
			}
		case TOGGLE_TODO:
			return {
				...state,
				todos: state.todos.map(item => (item.id === action.payload ? { ...item, completed: !item.completed } : item)),
			}
		case CLEAR:
			return {
				...state,
				todos: [],
			}
		case CLEAR_SELECTED:
			return {
				...state,
				todos: state.todos.filter(item => !item.completed),
			}
		// Якщо жоден з екшенів не знайден, треба повернути стейт незмінним
		default:
			return state
	}
}
