import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { List } from '../List/List'
import { useDispatch, useSelector } from 'react-redux'
import { selectTables } from '../../redux/tables/selectors'
import { addTable } from '../../redux/tables/slice'
import { selectData } from '../../redux/table/selectors'

export const Trello = () => {
	const dispatch = useDispatch()
	const { tables } = useSelector(selectTables)
	const data = useSelector(selectData)
	const getData = key => {
		return data.filter(item => item.table === key)
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
						<List key={table} optionNames={tables} title={table} currentTable={table} data={getData(table)} />
					))}
				</div>
			</div>
		</div>
	)
}
