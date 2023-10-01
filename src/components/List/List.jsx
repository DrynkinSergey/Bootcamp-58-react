import React from 'react'
import { Item } from '../Item/Item'

export const List = ({ data = [], addItem, currentTable, optionNames, moveTo, title, handleDelete }) => {
	const addTodo = () => {
		addItem('test')
	}
	let view = data.length ? (
		<ul className='flex flex-col gap-4 min-h-[400px]'>
			{data.map(item => (
				<Item
					currentTable={currentTable}
					optionNames={optionNames}
					key={item.id}
					moveTo={moveTo}
					deleteItem={() => handleDelete(item.id)}
					item={item}
				/>
			))}
		</ul>
	) : (
		<h1>Nothing yet</h1>
	)

	return (
		<div className='border-2 border-black p-5 shadow-lg flex flex-col'>
			<h2 className='text-2xl font-bold text-teal-500'>{title}</h2>
			{view}
			<button className='flex-grow items-end flex justify-center' onClick={addTodo}>
				Add todo
			</button>
		</div>
	)
}
