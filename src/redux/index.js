import { configureStore } from '@reduxjs/toolkit'
import { postsReducer } from './postsSlice'
import { filterSlice } from './filterSlice'

export const store = configureStore({
	reducer: {
		postsList: postsReducer,
		filter: filterSlice,
	},
})
