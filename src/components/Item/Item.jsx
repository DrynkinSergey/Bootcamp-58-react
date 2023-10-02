import { BadgeX } from 'lucide-react'
import React from 'react'

export const Item = ({ task }) => {
	const { id, title, table } = task
	return (
		<li className='flex justify-between py-2 px-2 border-[1px] '>
			<h2>{title}</h2>
			<button className=' px-2 py-1'>
				<BadgeX className='text-black hover:text-red-500' />
			</button>
		</li>
	)
}
