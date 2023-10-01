import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { List } from '../List/List'
import { useDispatch, useSelector } from 'react-redux'
import { selectTables } from '../../redux/tables/selectors'

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
		switch (key) {
			case 'todo':
				return data.filter(item => item.table === 'todo')
			case 'done':
				return data.filter(item => item.table === 'done')
			case 'inProgress':
				return data.filter(item => item.table === 'inProgress')
			default:
				console.log('error')
		}
	}
	const addNew = title => {
		setData(prev => [...prev, { id: nanoid(), title, table: 'todo' }])
	}
	const optionNames = ['todo', 'inProgress', 'done']
	return (
		<div>
			<h1>Dashboard</h1>
			<div className={`grid grid-cols-${tables.length}  gap-4 px-5 py-10`}>
				{tables.map(table => (
					<List
						key={table}
						addItem={addNew}
						optionNames={optionNames}
						moveTo={moveTo}
						handleDelete={handleDelete}
						title={table}
						currentTable={table}
						data={getData(table)}
					/>
				))}
			</div>
		</div>
	)
}
