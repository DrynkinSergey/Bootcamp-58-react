import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { selectPostById } from '../redux/selectors'

const Details = () => {
	const { id } = useParams()
	const { title, tag, body } = useSelector(state => selectPostById(state, id))

	return (
		<div className='hero min-h-screen bg-base-200'>
			<div className='hero-content flex-col lg:flex-row-reverse'>
				<div>
					<h1 className='text-5xl font-bold'>{title}</h1>
					<h5 className='text-smfont-bold badge badge-error py-2 px-2'>{tag}</h5>
					<p className='py-6'>{body}</p>
					<Link className='btn btn-primary' to='/posts'>
						Go back
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Details
