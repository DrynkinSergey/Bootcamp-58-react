import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { List } from '../List/List'
import { useDispatch, useSelector } from 'react-redux'
import { selectTables } from '../../redux/tables/selectors'
import { addTable } from '../../redux/tables/slice'

export const Trello = () => {
	const dispatch = useDispatch()
	const { tables } = useSelector(selectTables)
	const [data, setData] = useState([
		{ id: '1', title: 'Buy book', table: 'todo' },
		{ id: '2', title: 'Buy phone', table: 'done' },
		{ id: '3', title: 'Buy icecream', table: 'todo' },
	])
	const handleDelete = id => {
		setData(prev => prev.filter(item => item.id !== id))
	}
	const moveTo = (id, tableName) => {
		setData(prev => prev.map(item => (item.id === id ? { ...item, table: tableName } : item)))
	}
	const getData = key => {
		return data.filter(item => item.table === key)
	}
	const addNew = item => {
		setData(prev => [...prev, { id: nanoid(), title: item.title, table: item.table }])
	}
	const [newTable, setNewTable] = useState('')
	return (
		<div>
			<h1>Dashboard</h1>
			<div>
				<input value={newTable} onChange={e => setNewTable(e.target.value)} type='text' />
				<button onClick={() => dispatch(addTable(newTable))}>Add table</button>
			</div>
			<div className='w-full overflow-auto '>
				<div className={`flex  min-w-[100vw]  gap-4 px-5 py-10`}>
					{tables.map(table => (
						<List
							key={table}
							addItem={addNew}
							optionNames={tables}
							moveTo={moveTo}
							handleDelete={handleDelete}
							title={table}
							currentTable={table}
							data={getData(table)}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
