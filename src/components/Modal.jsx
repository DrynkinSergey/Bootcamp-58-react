import React from 'react'
import { useDispatch } from 'react-redux'
import { agree, close } from '../redux/modalGlobal'

export const Modal = () => {
	const dispatch = useDispatch()

	return (
		<>
			<div className='absolute z-44 inset-0 bg-black/50 flex justify-center items-center'>
				<div className='bg-white p-10 flex gap-4 rounded-lg shadow-lg'>
					<button className='btn btn-success' onClick={() => dispatch(agree())}>
						OK
					</button>
					<button className='btn btn-error' onClick={() => dispatch(close())}>
						Cancel
					</button>
				</div>
			</div>
		</>
	)
}
