import React from 'react'
import { useSelector } from 'react-redux'
import { selectFilter } from '../../redux/todoList/selectors'

const Filter = ({ setFilter }) => {
	const filter = useSelector(selectFilter)
	return (
		<div>
			<button style={{ backgroundColor: filter === 'all' && 'teal' }} onClick={() => setFilter('all')}>
				All
			</button>
			<button style={{ backgroundColor: filter === 'active' && 'teal' }} onClick={() => setFilter('active')}>
				Active
			</button>
			<button style={{ backgroundColor: filter === 'completed' && 'teal' }} onClick={() => setFilter('completed')}>
				Completed
			</button>
		</div>
	)
}

export default Filter
