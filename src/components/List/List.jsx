import React from 'react'
import { Item } from '../Item/Item'
import { XCircle } from 'lucide-react'

export const List = ({ data = [], title }) => {
	return (
		<div className='border-2 border-black rounded-md w-[450px] min-h-[500px]'>
			<div className=' border-b-2 py-2 px-4 border-black flex justify-between'>
				<h2 className='capitalize  font-bold text-2xl '>{title}</h2>
				<button>
					<XCircle />
				</button>
			</div>

			<ul>
				{data.map(task => (
					<Item key={task.id} task={task} />
				))}
			</ul>
		</div>
	)
}
