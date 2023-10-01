import React from 'react'
import { Item } from '../Item/Item'
import { useDispatch } from 'react-redux'
import { deleteTable } from '../../redux/tables/slice'

export const List = ({ data = [], addItem, currentTable, optionNames, moveTo, title, handleDelete }) => {
	const dispatch = useDispatch()
	const addTodo = () => {
		addItem({ title: 'text', table: title })
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
		<h1 className=''>Nothing yet</h1>
	)

	return (
		<div className='border-2 min-w-[480px] border-black p-5 shadow-lg flex flex-col'>
			<h2 className='text-2xl flex justify-between font-bold text-teal-500'>
				{title} <button onClick={() => dispatch(deleteTable(title))}>Delete Table</button>
			</h2>
			{view}
			<button className='flex-grow items-end flex justify-center' onClick={addTodo}>
				Add todo
			</button>
		</div>
	)
}
