import React, { useState } from 'react'
import { Item } from '../Item/Item'
import { ClipboardEdit, Plus, XCircle } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { deleteTable } from '../../redux/tables/slice'
import { Modal } from '../Modal/Modal'
import { TableDialogAdd } from '../TableDialog/TableDialogAdd'
import useModal from '../../hooks/useModal'
import { TableDialogRename } from '../TableDialog/TableDialogRename'
import { motion, AnimatePresence } from 'framer-motion'
import { animateFromBottom } from '../../animations/Animations'
import { TableDialogEditTask } from '../TableDialog/TableDialogEditTask'
export const List = ({ data = [], title, idx }) => {
	const dispatch = useDispatch()
	const [taskTitle, setTaskTitle] = useState('')
	const { isOpen, open, close, modalType, modalOptions } = useModal()
	const handleDeleteTable = () => {
		dispatch(deleteTable(title))
	}
	const handleEditTask = taskTitle => {
		open(modalOptions.editTask)
		setTaskTitle(taskTitle)
	}

	const currentModalView = {
		[modalOptions.addTask]: <TableDialogAdd table={title} close={close} />,
		[modalOptions.editTable]: <TableDialogRename table={title} close={close} />,
		[modalOptions.editTask]: (
			<TableDialogEditTask table={title} id={taskTitle.id} title={taskTitle.title} close={close} />
		),
	}
	return (
		<motion.div
			whileInView='visible'
			initial='hidden'
			custom={idx}
			viewport={{ once: true }}
			variants={animateFromBottom}
			className='flex flex-col border-2 border-black rounded-md min-w-[350px] min-h-[500px]'
		>
			<div className='bg-teal-400 border-b-2 py-2 px-4 border-black flex justify-between'>
				<h1>{modalType}</h1>
				<h2 className='capitalize  font-bold text-2xl '>{title}</h2>
				<div className='flex gap-4'>
					<button onClick={() => open(modalOptions.editTable)} className='hover:text-green-500'>
						<ClipboardEdit />
					</button>
					<button onClick={handleDeleteTable} className='hover:text-red-500'>
						<XCircle />
					</button>
				</div>
			</div>

			{data.length ? (
				<ul>
					<AnimatePresence>
						{data.map(task => (
							<Item editTask={() => handleEditTask(task)} key={task.id} task={task} />
						))}
					</AnimatePresence>
				</ul>
			) : (
				<h2 className='text-center py-8 text-teal-400 font-bold text-xl'>Empty table!</h2>
			)}

			<div className='flex flex-grow items-end'>
				<button
					onClick={() => open(modalOptions.addTask)}
					className=' border-black flex  border-2  px-6 py-2 mx-auto my-4 hover:bg-teal-500 hover:text-white'
				>
					Add task <Plus />
				</button>
			</div>
			{isOpen ? (
				<Modal title={modalType} close={close}>
					{currentModalView[modalType]}
				</Modal>
			) : null}
		</motion.div>
	)
}
