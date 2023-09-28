import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todoList/slice'

export const store = configureStore({
	reducer: {
		todos: todoReducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV !== 'production',
})
