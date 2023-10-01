import { configureStore } from '@reduxjs/toolkit'
import { tableReducer } from './tables/slice'
import { tableDataReducer } from './table/slice'

export const store = configureStore({
	reducer: {
		tableList: tableReducer,
		tableData: tableDataReducer,
	},
})
