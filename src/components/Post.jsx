import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost, moveLeft, moveRight } from '../redux/postsSlice'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { selectIsAgree, selectPosts } from '../redux/selectors'
import { open } from '../redux/modalGlobal'

const Post = ({ id, title = 'Title post', body, tag, idx }) => {
	const dispatch = useDispatch()
	const posts = useSelector(selectPosts)
	const isAgree = useSelector(selectIsAgree)
	isAgree && dispatch(deletePost(id))

	const removePost = () => {
		dispatch(open())
	}
	const moveTo = direction => {
		direction === 'left' ? dispatch(moveLeft(id)) : dispatch(moveRight(id))
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
				<div className='flex'>
					{idx !== 0 && <ChevronLeft onClick={() => moveTo('left')} />}
					{idx + 1 !== posts.length && <ChevronRight onClick={() => moveTo('right')} />}
				</div>
			</div>
		</div>
	)
}

export default Post
