import React, { useContext } from 'react'
import { List } from '../List/List'
import { useSelector } from 'react-redux'
import { selectTables } from '../../redux/tables/selectors'
import { selectTableData } from '../../redux/table/selectors'
import { Modal } from '../Modal/Modal'
import { TableDialog } from '../TableDialog/TableDialog'
import useMyContext from '../../hooks/useMyContext'

export const Trello = () => {
	const { tables } = useSelector(selectTables)
	const { isOpen, close, open } = useMyContext()
	const data = useSelector(selectTableData)
	const getData = key => {
		return data.filter(task => task.table === key)
	}
	return (
		<div className='px-4'>
			<header className='flex justify-between px-10 text-2xl items-center py-5'>
				<h1>Welcome to Trello analog!</h1>
				<button className='border-2 border-black px-8 py-2' onClick={open}>
					Add new table!
				</button>
			</header>
			<div className='flex gap-10 max-w-7xl mx-auto my-5'>
				{tables.map(table => (
					<List key={table} data={getData(table)} title={table} />
				))}
				{isOpen ? (
					<Modal title='Add table' close={close}>
						<TableDialog close={close} />
					</Modal>
				) : null}
			</div>
		</div>
	)
}
