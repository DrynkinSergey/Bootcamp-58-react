import React from 'react'
import { useDispatch } from 'react-redux'
import { deletePost } from '../redux/postsSlice'

const Post = ({ id, title = 'Title post', body, tag }) => {
	const dispatch = useDispatch()
	const removePost = () => {
		dispatch(deletePost(id))
	}
	return (
		<div className='card  bg-primary text-primary-content'>
			<div className='card-body'>
				<div className='badge badge-ghost'>{tag}</div>
				<h2 className='card-title'>{title}</h2>
				<p>{body}</p>
				<div className='card-actions justify-end'>
					<button className='btn'>Edit</button>
					<button onClick={removePost} className='btn btn-error'>
						Delete
					</button>
				</div>
			</div>
		</div>
	)
}

export default Post
