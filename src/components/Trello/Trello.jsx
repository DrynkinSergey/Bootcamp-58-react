import React from 'react'
import { List } from '../List/List'
import { useSelector } from 'react-redux'
import { selectTables } from '../../redux/tables/selectors'
import { selectTableData } from '../../redux/table/selectors'
import { Modal } from '../Modal/Modal'
import { TableDialog } from '../TableDialog/TableDialog'

export const Trello = () => {
	const { tables } = useSelector(selectTables)
	const data = useSelector(selectTableData)
	const getData = key => {
		return data.filter(task => task.table === key)
	}
	return (
		<div>
			<h1>Welcome to Trello analog!</h1>
			<div className='flex gap-10 max-w-7xl mx-auto my-5'>
				{tables.map(table => (
					<List key={table} data={getData(table)} title={table} />
				))}
				<Modal>
					<TableDialog />
				</Modal>
			</div>
		</div>
	)
}
