import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
	return (
		<div className='min-h-screen grid gap-2 justify-center items-center '>
			<div>
				<h1 className='text-4xl font-bold'>Oops!!! Page is not found 😉</h1>
				<h2 className='text-xl font-bold'>
					You can go to{' '}
					<Link className='text-teal-500 underline' to='/todos'>
						Todo
					</Link>{' '}
					page
				</h2>
			</div>
		</div>
	)
}
