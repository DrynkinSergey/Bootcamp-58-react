import { BadgeX } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask } from '../../redux/table/slice'
import { toast } from 'react-toastify'

export const Item = ({ task }) => {
	const { id, title, table } = task
	const dispatch = useDispatch()
	const removeTask = () => {
		dispatch(deleteTask(id))
		toast.info('You delete task!')
	}
	return (
		<li className='flex justify-between py-2 px-2 border-[1px] '>
			<h2>{title}</h2>
			<button onClick={removeTask} className=' px-2 py-1'>
				<BadgeX className='text-black hover:text-red-500' />
			</button>
		</li>
	)
}
