import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todoList/slice'
import { authReducer } from './auth/slice'

export const store = configureStore({
	reducer: {
		todos: todoReducer,
		auth: authReducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV !== 'production',
})
