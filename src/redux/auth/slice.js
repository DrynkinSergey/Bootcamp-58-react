import { createSlice } from '@reduxjs/toolkit'
import { registerThunk } from './operations'

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
		builder.addCase(registerThunk.fulfilled, (state, { payload }) => {
			state.user = payload.user
			state.token = payload.token
			state.isLoggedIn = true
		})
	},
})

export const authReducer = slice.reducer
