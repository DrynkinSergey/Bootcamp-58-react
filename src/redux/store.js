import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todoList/slice'
import { postsReducer } from './posts/slice'
import { toast } from 'react-toastify'
import logger from 'redux-logger'
const myLogger = store => next => action => {
	if (action.payload?.title === 'Angular') {
		action.payload.title = 'React'
		toast.warning('You dont need it!')
	}
	if (action.payload?.title === 'admin') {
		action.payload = {
			...action.payload,
			role: 'admin',
		}
		toast.success('Welcome admin')
	}
	next(action)
}

export const store = configureStore({
	reducer: {
		todos: todoReducer,
		posts: postsReducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
	devTools: process.env.NODE_ENV !== 'production',
})
