import { Button } from 'flowbite-react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setFilterStr } from '../../redux/todoList/slice'

export const Filter = () => {
	const dispatch = useDispatch()

	return (
		<div className='mx-auto w-full flex justify-center'>
			<Button.Group outline className='py-5 px-2'>
				<Button onClick={() => dispatch(setFilterStr('all'))} color='gray'>
					All
				</Button>
				<Button onClick={() => dispatch(setFilterStr('active'))} color='gray'>
					Active
				</Button>
				<Button onClick={() => dispatch(setFilterStr('completed'))} color='gray'>
					Completed
				</Button>
			</Button.Group>
		</div>
	)
}
