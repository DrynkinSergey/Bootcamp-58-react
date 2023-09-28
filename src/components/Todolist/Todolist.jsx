import React, { useEffect } from 'react'
import AddForm from './AddForm'
import TodoItem from './TodoItem'
import { Filter } from './Filter'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilteredTodos, selectUncompleted } from '../../redux/todoList/selectors'
import { fetchTodosThunk } from '../../redux/todoList/operations'

const Todolist = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchTodosThunk())
	}, [dispatch])
	const todos = useSelector(selectFilteredTodos)
	const uncompletedTodos = useSelector(selectUncompleted)
	return (
		<div>
			<AddForm />
			<Filter />

			<h1 className='text-center'>Uncompleted todos: {uncompletedTodos}</h1>
			<ul className='grid grid-cols-3 py-5 px-2 gap-2 max-w-5xl mx-auto'>
				{todos.map(item => (
					<TodoItem key={item.id} {...item} />
				))}
			</ul>
		</div>
	)
}

export default Todolist