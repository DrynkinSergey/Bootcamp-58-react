import { List } from '../List/List'
import { useSelector } from 'react-redux'
import { selectTables } from '../../redux/tables/selectors'
import { selectTableData } from '../../redux/table/selectors'
import { Modal } from '../Modal/Modal'
import { TableDialog } from '../TableDialog/TableDialog'
import { AnimatePresence, motion } from 'framer-motion'
import { animateFromDirection } from '../../animations/Animations'
import useModal from '../../hooks/useModal'

export const Trello = () => {
	const { tables } = useSelector(selectTables)
	const { isOpen, close, open, modalOptions, modalType } = useModal()
	const data = useSelector(selectTableData)
	const getData = key => {
		return data.filter(task => task.table === key)
	}
	const currentModalView = {
		[modalOptions.newTable]: <TableDialog close={close} />,
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
					onClick={() => open(modalOptions.newTable)}
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
					<AnimatePresence>
						<Modal title={modalType} close={close}>
							{currentModalView[modalType]}
						</Modal>
					</AnimatePresence>
				) : null}
			</div>
		</div>
	)
}
