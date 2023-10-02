import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { login, logout, refresh, register } from './operations'

const initialState = {
	user: {
		name: '',
		email: '',
	},
	token: '',
	isLoggedIn: false,
}
const slice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(logout.fulfilled, (state, { payload }) => {
				return (state = initialState)
			})
			.addCase(refresh.fulfilled, (state, { payload }) => {
				state.user.name = payload.name
				state.user.email = payload.email
				state.isLoggedIn = true
			})
			.addMatcher(isAnyOf(login.fulfilled, register.fulfilled), (state, { payload }) => {
				state.user.name = payload.user.name
				state.user.email = payload.user.email
				state.token = payload.token
				state.isLoggedIn = true
			})
	},
})
export const authReducer = slice.reducer
