import React from 'react'
import { Item } from '../Item/Item'
import { ClipboardEdit, Plus, XCircle } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { deleteTable } from '../../redux/tables/slice'
import { Modal } from '../Modal/Modal'
import { TableDialogAdd } from '../TableDialog/TableDialogAdd'
import useModal from '../../hooks/useModal'
import { TableDialogRename } from '../TableDialog/TableDialogRename'

export const List = ({ data = [], title }) => {
	const dispatch = useDispatch()
	const { isOpen, open, close } = useModal()
	const { isOpen: isOpenRename, toggle } = useModal()
	const handleDeleteTable = () => {
		dispatch(deleteTable(title))
	}
	return (
		<div className='border-2 border-black rounded-md w-[450px] min-h-[500px]'>
			<div className=' border-b-2 py-2 px-4 border-black flex justify-between'>
				<h2 className='capitalize  font-bold text-2xl '>{title}</h2>
				<div className='flex gap-4'>
					<button onClick={toggle} className='hover:text-green-500'>
						<ClipboardEdit />
					</button>
					<button onClick={handleDeleteTable} className='hover:text-red-500'>
						<XCircle />
					</button>
				</div>
			</div>

			{data.length ? (
				<ul>
					{data.map(task => (
						<Item key={task.id} task={task} />
					))}
				</ul>
			) : (
				<h2 className='text-center py-8 text-teal-400 font-bold text-xl'>Empty table!</h2>
			)}

			<button
				onClick={open}
				className='flex border-2 border-black px-6 py-2 mx-auto my-10 hover:bg-teal-500 hover:text-white'
			>
				Add task <Plus />
			</button>
			{isOpen ? (
				<Modal title='New task' close={close}>
					<TableDialogAdd table={title} close={close} />
				</Modal>
			) : null}
			{isOpenRename ? (
				<Modal title='Rename table' close={toggle}>
					<TableDialogRename table={title} close={toggle} />
				</Modal>
			) : null}
		</div>
	)
}
