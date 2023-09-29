import { createAsyncThunk } from '@reduxjs/toolkit'
import { setCurrentItem } from './slice'
import { goItApi } from '../auth/operations'

export const fetchTodosThunk = createAsyncThunk('fetchTodos', async (_, thunkApi) => {
	const { data } = await goItApi.get('/tasks')
	return data
})
export const addTodoThunk = createAsyncThunk('addTodo', async (body, thunkApi) => {
	await goItApi.post('/tasks', body)
	thunkApi.dispatch(fetchTodosThunk())
})
export const deleteTodoThunk = createAsyncThunk('deleteTodo', async (id, thunkApi) => {
	await goItApi.delete(`/tasks/${id}`)
	thunkApi.dispatch(fetchTodosThunk())
})
export const toggleTodoThunk = createAsyncThunk('toggleTodo', async (body, thunkApi) => {
	thunkApi.dispatch(setCurrentItem(body.id))
	await goItApi.patch(`/tasks/${body.id}`, { ...body, completed: !body.completed })
	thunkApi.dispatch(fetchTodosThunk())
})
