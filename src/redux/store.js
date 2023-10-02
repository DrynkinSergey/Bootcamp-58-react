import { configureStore } from '@reduxjs/toolkit'
import { tablesReducer } from './tables/slice'

export const store = configureStore({
	reducer: {
		tables: tablesReducer,
	},
})
