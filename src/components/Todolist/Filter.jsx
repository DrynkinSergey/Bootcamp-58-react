import { Button } from 'flowbite-react'
import React from 'react'

export const Filter = () => {
	return (
		<div className='mx-auto w-full flex justify-center'>
			<Button.Group outline className='py-5 px-2'>
				<Button color='gray'>All</Button>
				<Button color='gray'>Active</Button>
				<Button color='gray'>Completed</Button>
			</Button.Group>
		</div>
	)
}
