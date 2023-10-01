import React from 'react'
import { Item } from '../Item/Item'
import { useDispatch } from 'react-redux'
import { deleteTable } from '../../redux/tables/slice'
import { addToTable } from '../../redux/table/slice'

export const List = ({ data = [], currentTable, title }) => {
	const dispatch = useDispatch()
	const addTodo = () => {
		dispatch(addToTable({ title: 'text', table: title }))
	}
	let view = data.length ? (
		<ul className='flex flex-col gap-4 min-h-[400px]'>
			{data.map(item => (
				<Item currentTable={currentTable} key={item.id} item={item} />
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
