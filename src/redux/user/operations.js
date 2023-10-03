import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://goit-task-manager.herokuapp.com/'
const setToken = token => {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`
}
const clearToken = token => {
	axios.defaults.headers.common.Authorization = ``
}

export const register = createAsyncThunk('reg', async (credentials, thunkApi) => {
	try {
		const { data } = await axios.post('/users/signup', credentials)
		setToken(data.token)
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})
export const login = createAsyncThunk('log', async (credentials, thunkApi) => {
	try {
		const { data } = await axios.post('/users/login', credentials)
		setToken(data.token)
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})
export const logout = createAsyncThunk('logout', async (credentials, thunkApi) => {
	try {
		const { data } = await axios.post('/users/logout')
		clearToken()
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})
export const refresh = createAsyncThunk('refresh', async (_, thunkApi) => {
	const token = thunkApi.getState().auth.token
	if (!token) {
		return thunkApi.rejectWithValue('Token is not exist')
	}
	setToken(token)
	try {
		const { data } = await axios.get('/users/me')

		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})
