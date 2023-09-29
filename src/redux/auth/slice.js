import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { loginThunk, registerThunk } from './operations'

const initialState = {
	user: {
		name: '',
		email: '',
	},
	token: '',
	isLoggedIn: false,
	error: '',
}

const slice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: builder => {
		builder.addMatcher(isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled), (state, { payload }) => {
			state.user = payload.user
			state.token = payload.token
			state.isLoggedIn = true
		})
	},
})

export const authReducer = slice.reducer
