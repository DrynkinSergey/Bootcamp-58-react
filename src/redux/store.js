import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todoList/slice'
import { postsReducer } from './posts/slice'

export const store = configureStore({
	reducer: {
		todos: todoReducer,
		posts: postsReducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV !== 'production',
})
