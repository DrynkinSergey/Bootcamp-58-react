import React, { useEffect } from 'react'
import AddForm from './AddForm'
import TodoItem from './TodoItem'
import { Filter } from './Filter'
import { useFetchTodosQuery } from '../../redux/RTKQuery/todoApi'
import { Spinner } from 'flowbite-react'

const Todolist = () => {
	const { data: todos = [], isLoading } = useFetchTodosQuery()
	return (
		<div>
			<AddForm />
			{/* <Filter /> */}
			{isLoading && <h1>Loading</h1>}
			<ul className='grid grid-cols-3 py-5 px-2 gap-2 max-w-5xl mx-auto'>
				{todos.map(item => (
					<TodoItem key={item.id} {...item} />
				))}
			</ul>
		</div>
	)
}

export default Todolist
