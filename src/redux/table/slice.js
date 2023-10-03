import { createSlice } from '@reduxjs/toolkit'
import { renameTable } from '../tables/slice'

const slice = createSlice({
	name: 'table',
	initialState: {
		tableData: [
			{ id: 1, title: 'Buy new car', table: 'todo' },
			{ id: 2, title: 'Feed the fish', table: 'done' },
			{ id: 3, title: 'Learn react', table: 'done' },
			{ id: 4, title: 'Redux', table: 'todo' },
			{ id: 5, title: 'Js', table: 'done' },
		],
	},
	reducers: {
		deleteTask: (state, { payload }) => {
			state.tableData = state.tableData.filter(task => task.id !== payload)
		},
		addTask: (state, { payload }) => {
			state.tableData.push(payload)
		},
		editTask: (state, { payload }) => {
			state.tableData = state.tableData.map(task => (task.id === payload.id ? payload.data : task))
		},
		moveTo: (state, { payload }) => {
			state.tableData = state.tableData.map(item =>
				item.id === payload.taskId ? { ...item, table: payload.newTable } : item
			)
		},
	},
	extraReducers: builder => {
		builder.addCase(renameTable, (state, { payload }) => {
			state.tableData = state.tableData.map(item =>
				item.table === payload.oldTable ? { ...item, table: payload.newTable } : item
			)
		})
	},
})

export const tableReducer = slice.reducer
export const { deleteTask, moveTo, addTask, editTask } = slice.actions
