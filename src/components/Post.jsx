import React from 'react'
import { useDispatch } from 'react-redux'
import { deletePost } from '../redux/postsSlice'
import { Link, useNavigate } from 'react-router-dom'

const Post = ({ id, title = 'Title post', body, tag }) => {
	const dispatch = useDispatch()

	const removePost = () => {
		dispatch(deletePost(id))
	}

	return (
		<div className='card w-full  bg-primary text-primary-content'>
			<div className='card-body'>
				<div className='badge badge-ghost'>{tag}</div>
				<h2 className='card-title'>{title}</h2>
				<p>{body.length > 150 ? `${body.slice(1, 150)}...` : body}</p>
				<div className='card-actions  my-2 md:justify-end'>
					<Link className='btn btn-info w-1/3 text-xs md:w-1/3  md:text-md' to={`/posts/${id}`}>
						Show more...
					</Link>
					<Link to={`/edit/${id}`} className='text-xs md:text-md btn'>
						Edit
					</Link>
					<button onClick={removePost} className='text-xs md:text-md btn btn-error'>
						Delete
					</button>
				</div>
			</div>
		</div>
	)
}

export default Post
