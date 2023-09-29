//https://goit-task-manager.herokuapp.com/

import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const goItApi = axios.create({
	baseURL: 'https://goit-task-manager.herokuapp.com/',
})

export const registerThunk = createAsyncThunk('register', async (credentials, thunkApi) => {
	try {
		const { data } = await goItApi.post('/users/signup', credentials)
		console.log(data)
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})
