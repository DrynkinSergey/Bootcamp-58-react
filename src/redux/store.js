import { configureStore } from '@reduxjs/toolkit'
import { tableReducer } from './tables/slice'

export const store = configureStore({
	reducer: {
		tableList: tableReducer,
	},
})
