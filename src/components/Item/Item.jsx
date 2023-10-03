import { BadgeX, ClipboardEdit } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, moveTo } from '../../redux/table/slice'
import { toast } from 'react-toastify'
import { selectTables } from '../../redux/tables/selectors'
import { animateItems } from '../../animations/Animations'
import { motion } from 'framer-motion'
export const Item = ({ task, idx, editTask }) => {
	const { id, title, table } = task
	const dispatch = useDispatch()
	const { tables } = useSelector(selectTables)
	const removeTask = () => {
		dispatch(deleteTask(id))
		toast.info('You delete task!')
	}
	const moveToTable = e => {
		dispatch(moveTo({ taskId: id, newTable: e.target.value }))
	}

	return (
		<motion.li
			whileInView='visible'
			initial='hidden'
			viewport={{ once: true }}
			variants={animateItems}
			exit='exit'
			className='grid grid-cols-[2fr_1fr_20px_40px] gap-2 items-center justify-between py-2 px-2 border-[1px] '
		>
			<h2 className='capitalize'>{title}</h2>
			<select value='' onChange={moveToTable}>
				<option disabled value=''>
					Move to
				</option>
				{tables.map(
					opt =>
						opt !== table && (
							<option key={opt} value={opt}>
								{opt}
							</option>
						)
				)}
			</select>
			<button onClick={editTask} className='hover:text-green-500'>
				<ClipboardEdit />
			</button>
			<button onClick={removeTask} className=' px-2 py-1'>
				<BadgeX className='text-black hover:text-red-500' />
			</button>
		</motion.li>
	)
}
