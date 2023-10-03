import React, { useContext } from 'react'
import { List } from '../List/List'
import { useSelector } from 'react-redux'
import { selectTables } from '../../redux/tables/selectors'
import { selectTableData } from '../../redux/table/selectors'
import { Modal } from '../Modal/Modal'
import { TableDialog } from '../TableDialog/TableDialog'
import { AnimatePresence, motion } from 'framer-motion'
import useMyContext from '../../hooks/useMyContext'
import { animateFromDirection } from '../../animations/Animations'

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
				<motion.h1
					whileInView='visible'
					custom={{ direction: 'left', delay: 3 }}
					initial='hidden'
					variants={animateFromDirection}
				>
					Welcome to Trello analog!
				</motion.h1>
				<motion.button
					whileInView='visible'
					custom={{ direction: 'right', delay: 6 }}
					initial='hidden'
					variants={animateFromDirection}
					className='border-2 border-black px-8 py-2'
					onClick={open}
				>
					Add new table!
				</motion.button>
			</header>
			<div className='flex gap-10 overflow-x-auto py-5 overflow-y-hidden justify-between max-w-7xl mx-auto my-5 px-4'>
				<AnimatePresence>
					{tables.map((table, idx) => (
						<List key={table} idx={idx} data={getData(table)} title={table} />
					))}
				</AnimatePresence>

				{isOpen ? (
					<Modal title='Add table' close={close}>
						<TableDialog close={close} />
					</Modal>
				) : null}
			</div>
		</div>
	)
}
