import React from 'react'
import { useNavigate } from 'react-router-dom'

const NoPost = () => {
	const navigate = useNavigate()
	return (
		<div className='hero min-h-screen bg-base-200'>
			<div className='hero-content text-center'>
				<div className='max-w-md'>
					<h1 className='text-5xl font-bold'>Hello there!</h1>
					<p className='py-6'>We dont have any posts, maybe you want to create smth!</p>
					<button onClick={() => navigate('/add')} className='btn btn-primary'>
						Create your first post!
					</button>
				</div>
			</div>
		</div>
	)
}

export default NoPost
