import { nanoid } from 'nanoid'
import { ADD_TODO, CLEAR, CLEAR_SELECTED, DELETE, TOGGLE_TODO } from './constants'

// Створюємо функції , котрі повертають об'єкт. Цей об'єкт називається ACTION.
// В нього має бути обов'язково type!!!!!
// Опціонально payload - нагрузка котра йде до стейта від компонента
// Пейлоад може бути все що завгодно (id, item , [] , {} , boolean, 'Hello world!')
export const deleteTodo = id => ({ type: DELETE, payload: id })

export const addTodo = title => ({
	type: ADD_TODO,
	// Якщо треба розширити пейлоад, ми налаштовуємо це діло в action payload
	// Додаємо якісь поля та айді, інші дані
	payload: {
		id: nanoid(),
		completed: false,
		todo: title,
	},
})

export const toggleTodo = id => ({ type: TOGGLE_TODO, payload: id })

export const clearTodos = () => ({ type: CLEAR })

export const clearSelected = () => ({ type: CLEAR_SELECTED })
