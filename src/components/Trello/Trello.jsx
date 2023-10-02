import React from 'react'
import { List } from '../List/List'

export const Trello = () => {
	const data = [
		{ id: 1, title: 'Buy new car', table: 'todo' },
		{ id: 2, title: 'Feed the fish', table: 'done' },
		{ id: 3, title: 'Learn react', table: 'done' },
		{ id: 4, title: 'Redux', table: 'todo' },
		{ id: 5, title: 'Js', table: 'done' },
	]
	const getData = key => {
		return data.filter(task => task.table === key)
	}
	return (
		<div>
			<h1>Welcome to Trello analog!</h1>
			<div className='flex gap-10 max-w-7xl mx-auto my-5'>
				<List data={getData('todo')} title='todo' />
				<List data={getData('inProgress')} title='inProgress' />
				<List data={getData('done')} title='done' />
			</div>
		</div>
	)
}
