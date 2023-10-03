import { BadgeX } from 'lucide-react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, moveTo } from '../../redux/table/slice'
import { toast } from 'react-toastify'
import { selectTables } from '../../redux/tables/selectors'
import { animateFromBottom, animateFromDirection, animateItems } from '../../animations/Animations'
import { motion } from 'framer-motion'
export const Item = ({ task, idx }) => {
	const { id, title, table } = task
	const dispatch = useDispatch()
	const [value, setValue] = useState('')
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
			variants={animateItems}
			exit='exit'
			className='flex items-center justify-between py-2 px-2 border-[1px] '
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
			<button onClick={removeTask} className=' px-2 py-1'>
				<BadgeX className='text-black hover:text-red-500' />
			</button>
		</motion.li>
	)
}
