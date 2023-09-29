import { createSlice } from '@reduxjs/toolkit'

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
	// extraReducers
})

export const authReducer = slice.reducer
