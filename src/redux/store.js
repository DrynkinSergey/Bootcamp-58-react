// Імпортуємо метод для створення стору
import { createStore } from 'redux'
// Імпортуємо рут редьюсер ( один редьюсер, котрий збирає декілька в одну кучку)
import { rootReducer } from './rootReducer'
// Імпортуємо з бібліотеки метод для підключення дев тулз
import { devToolsEnhancer } from '@redux-devtools/extension'
import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counter/reducer'
import { todoReducer } from './todoList/reducer'

// Створюємо екземпляр енхенсера ( посилювач або по суті сам девтулз)
const enhancer = devToolsEnhancer()
// Створюємо стор для того , щоб використати його в index.js
// Він приймає першим аргументом наш редьюсер, або рут редьюсер (башато штук)
// export const store = createStore(
// 	// Перший аргумент
// 	rootReducer,
// 	// Підключення девтулз
// 	enhancer
// 	// Підключення девтулз якщо, не ставили npm пакет
// 	// МОжна використовувати на вибір
// 	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

export const store = configureStore({
	reducer: {
		count: counterReducer,
		todos: todoReducer,
	},
	devTools: process.env.NODE_ENV !== 'production',
})

console.log(process.env)
