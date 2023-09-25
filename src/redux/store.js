import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counter/slice'
import { todoReducer } from './todoList/slice'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { postsReducer } from './posts/slice'

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
}

const persistedReducer = persistReducer(persistConfig, todoReducer)
export const store = configureStore({
	reducer: {
		count: counterReducer,
		todos: persistedReducer,
		posts: postsReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
	devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)
