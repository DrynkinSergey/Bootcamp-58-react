import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { loginThunk, logoutThunk, refreshThunk, registerThunk } from './operations'

const initialState = {
	user: {
		name: '',
		email: '',
	},
	token: '',
	isLoggedIn: false,
	error: '',
	loading: false,
	isRefresh: false,
}

const slice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: builder => {
		builder

			.addCase(logoutThunk.fulfilled, (state, { payload }) => {
				return (state = initialState)
			})
			.addCase(refreshThunk.pending, (state, { payload }) => {
				state.isRefresh = true
			})
			.addCase(refreshThunk.rejected, (state, { payload }) => {
				state.isRefresh = false
			})
			.addCase(refreshThunk.fulfilled, (state, { payload }) => {
				state.user.name = payload.name
				state.user.email = payload.email
				state.isLoggedIn = true
				state.isRefresh = false
			})
			.addMatcher(isAnyOf(registerThunk.pending, loginThunk.pending), (state, { payload }) => {
				state.loading = true
			})
			.addMatcher(isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled), (state, { payload }) => {
				state.user = payload.user
				state.token = payload.token
				state.loading = false
				state.isLoggedIn = true
			})
	},
})

export const authReducer = slice.reducer
