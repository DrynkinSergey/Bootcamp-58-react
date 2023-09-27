import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const todos = axios.create({
	baseURL: 'https://6513d1618e505cebc2ea317b.mockapi.io',
})

export const fetchTodosThunk = createAsyncThunk('fetchTodos', async (_, thunkApi) => {
	const { data } = await todos.get('/todos')
	return data
})
export const addTodoThunk = createAsyncThunk('addTodo', async (body, thunkApi) => {
	await todos.post('/todos', body)
	thunkApi.dispatch(fetchTodosThunk())
})
export const deleteTodoThunk = createAsyncThunk('deleteTodo', async (id, thunkApi) => {
	await todos.delete(`/todos/${id}`)
	thunkApi.dispatch(fetchTodosThunk())
})
export const toggleTodoThunk = createAsyncThunk('toggleTodo', async (body, thunkApi) => {
	await todos.put(`/todos/${body.id}`, { ...body, completed: !body.completed })
	thunkApi.dispatch(fetchTodosThunk())
})
