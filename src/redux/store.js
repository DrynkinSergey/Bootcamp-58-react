import { configureStore } from '@reduxjs/toolkit'
import { tablesReducer } from './tables/slice'
import { tableReducer } from './table/slice'

export const store = configureStore({
	reducer: {
		tables: tablesReducer,
		table: tableReducer,
	},
})
