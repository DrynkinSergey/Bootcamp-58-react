import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { tablesReducer } from './tables/slice'
import { tableReducer } from './table/slice'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authReducer } from './user/slice'

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
}

const persistConfigTable = {
	key: 'root-table',
	version: 1,
	storage,
}

// const rootReducer = combineReducers({ tables: tablesReducer, table: tableReducer })
// const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: {
		tables: persistReducer(persistConfig, tablesReducer),
		table: persistReducer(persistConfigTable, tableReducer),
		auth: authReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})
export let persistor = persistStore(store)
