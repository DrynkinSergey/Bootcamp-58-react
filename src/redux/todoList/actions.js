import { nanoid } from 'nanoid'

import { createAction } from '@reduxjs/toolkit'

// Створюємо функції , котрі повертають об'єкт. Цей об'єкт називається ACTION.
// В нього має бути обов'язково type!!!!!
// Опціонально payload - нагрузка котра йде до стейта від компонента
// Пейлоад може бути все що завгодно (id, item , [] , {} , boolean, 'Hello world!')

// export const deleteTodo = id => ({ type: DELETE, payload: id })

// export const addTodo = title => ({
// 	type: ADD_TODO,
// 	// Якщо треба розширити пейлоад, ми налаштовуємо це діло в action payload
// 	// Додаємо якісь поля та айді, інші дані
// payload: {
// 	id: nanoid(),
// 	completed: false,
// 	todo: title,
// },
// })

// export const toggleTodo = id => ({ type: TOGGLE_TODO, payload: id })

// export const clearTodos = () => ({ type: CLEAR })

// export const clearSelected = () => ({ type: CLEAR_SELECTED })

// export const setFilterStr = activeFilter => ({ type: SET_FILTER, payload: activeFilter })
export const deleteTodo = createAction('deleteTodo')
export const toggleTodo = createAction('toggleTodo')
export const clearTodos = createAction('claerTodos')
export const clearSelected = createAction('clearSelected')
export const setFilterStr = createAction('setFilterStr')
export const addTodo = createAction('addTodo', title => {
	return {
		payload: {
			id: nanoid(),
			completed: false,
			todo: title,
			createdAt: new Date().toLocaleTimeString(),
		},
	}
})

// console.log(addTodo('REDUX'))
// console.log(deleteTodo('REDUX'))
// console.log(deleteTodo())
// console.log(deleteTodo({ user: 'Andre', age: 77 }))
