import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todoList/slice'
import { postsReducer } from './posts/slice'
import { toast } from 'react-toastify'
import logger from 'redux-logger'
import { todoApi } from './RTKQuery/todoApi'
import { setupListeners } from '@reduxjs/toolkit/query'
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
		[todoApi.reducerPath]: todoApi.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(todoApi.middleware),
	devTools: process.env.NODE_ENV !== 'production',
})

setupListeners(store.dispatch)
