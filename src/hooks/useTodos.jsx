import { useDispatch, useSelector } from 'react-redux'

import { toast } from 'react-toastify'
import { selectFilter, selectTodos } from '../redux/todoList/selectors'
import { addTodo, clearSelected, clearTodos, deleteTodo, setFilterStr, toggleTodo } from '../redux/todoList/slice'
import { useEffect } from 'react'
import { addTodoThunk, fetchTodosThunk, deleteTodoThunk, toggleTodoThunk } from '../redux/todoList/operations'

export const useTodos = () => {
	const todos = useSelector(selectTodos)
	const filter = useSelector(selectFilter)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchTodosThunk())
	}, [dispatch])

	const hanldeDeleteTodo = id => {
		dispatch(deleteTodoThunk(id))
		toast.success('You delete todo')
	}
	const handleAddTodo = title => {
		dispatch(addTodoThunk({ title, completed: false }))
	}
	const handleToggle = body => {
		dispatch(toggleTodoThunk(body))
	}
	const clearAllTodos = () => {
		dispatch(clearTodos())
	}
	const clearSelectedTodos = () => {
		dispatch(clearSelected())
	}
	const setFilter = filterName => {
		dispatch(setFilterStr(filterName))
	}
	const getFilteredData = (data, filter) => {
		switch (filter) {
			case 'all':
				return data
			case 'active':
				return data.filter(item => !item.completed)
			case 'completed':
				return data.filter(item => item.completed)

			default:
				break
		}
	}
	return {
		clearSelectedTodos,
		clearAllTodos,
		handleAddTodo,
		handleToggle,
		setFilter,
		hanldeDeleteTodo,
		todos: getFilteredData(todos, filter),
	}
}
