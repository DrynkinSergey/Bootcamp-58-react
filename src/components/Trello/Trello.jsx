import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { List } from '../List/List'

export const Trello = () => {
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
	const optionNames = ['todo', 'inProgress', 'done']
	return (
		<div>
			<h1>Dashboard</h1>
			<div className='grid grid-cols-3 gap-4 px-5 py-10'>
				<List
					optionNames={optionNames}
					moveTo={moveTo}
					handleDelete={handleDelete}
					title='Todo'
					currentTable='todo'
					data={getData('todo')}
				/>
				<List
					optionNames={optionNames}
					moveTo={moveTo}
					handleDelete={handleDelete}
					title='In Progress'
					currentTable='inProgress'
					data={getData('inProgress')}
				/>
				<List
					optionNames={optionNames}
					moveTo={moveTo}
					handleDelete={handleDelete}
					title='Done'
					currentTable='done'
					data={getData('done')}
				/>
			</div>
		</div>
	)
}
