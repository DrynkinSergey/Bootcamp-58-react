import { XCircle } from 'lucide-react'
import React from 'react'

export const Modal = ({ children, title = 'Title', close }) => {
	return (
		<div className='inset-0 fixed flex justify-center items-center bg-black/50'>
			<div className='py-10 px-10 bg-white'>
				<div className='flex justify-between px-5 py-2 border-b-2 border-black'>
					<h2 className='text-xl'>{title}</h2>
					<button onClick={close} className='hover:text-red-500'>
						<XCircle />
					</button>
				</div>
				<div>{children}</div>
			</div>
		</div>
	)
}
