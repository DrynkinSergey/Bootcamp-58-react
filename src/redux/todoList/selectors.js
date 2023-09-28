import { createSelector } from '@reduxjs/toolkit'

export const selectTodos = createSelector([state => state.todos.todos], todos => todos)
export const selectFilter = state => state.todos.filter
export const selectLoading = state => state.todos.loading
export const selectCurrent = state => state.todos.currentItem

export const selectUncompleted1 = state => {
	console.log('CALC TODO')

	const todos = selectTodos(state)
	return todos.reduce((total, curr) => (!curr.completed ? total + 1 : total), 0)
}

export const selectUncompleted = createSelector([selectTodos], todos => {
	console.log('CALC TODO')
	return todos.reduce((total, curr) => (!curr.completed ? total + 1 : total), 0)
})

export const selectFilteredTodos1 = state => {
	console.log('FILTER TODO')
	const todos = selectTodos(state)
	const filter = selectFilter(state)

	switch (filter) {
		case 'all':
			return todos
		case 'active':
			return todos.filter(item => !item.completed)
		case 'completed':
			return todos.filter(item => item.completed)
		default:
			console.log('error with filter: ', filter)
	}
}

export const selectFilteredTodos = createSelector([selectTodos, selectFilter], (todos, filter) => {
	console.log('FILTER TODO')

	switch (filter) {
		case 'all':
			return todos
		case 'active':
			return todos.filter(item => !item.completed)
		case 'completed':
			return todos.filter(item => item.completed)
		default:
			console.log('error with filter: ', filter)
	}
})
