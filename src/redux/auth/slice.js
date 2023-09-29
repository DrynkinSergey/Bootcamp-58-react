import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { loginThunk, logoutThunk, registerThunk } from './operations'

const initialState = {
	user: {
		name: '',
		email: '',
	},
	token: '',
	isLoggedIn: false,
	error: '',
	loading: false,
}

const slice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: builder => {
		builder

			.addCase(logoutThunk.fulfilled, (state, { payload }) => {
				return (state = initialState)
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
