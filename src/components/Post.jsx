import React from 'react'

const Post = ({ title = 'Title post', body, tag }) => {
	return (
		<div className='card py-10 bg-primary text-primary-content'>
			<div className='card-body'>
				<div className='badge badge-ghost'>{tag}</div>
				<h2 className='card-title'>{title}</h2>
				<p>{body}</p>
				<div className='card-actions justify-end'>
					<button className='btn'>Edit</button>
					<button className='btn btn-error'>Delete</button>
				</div>
			</div>
		</div>
	)
}

export default Post
