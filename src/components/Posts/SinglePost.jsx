import React from 'react'
import { Card } from './Posts.styled'
import { useDispatch } from 'react-redux'
import { deletePost } from '../../redux/posts/slice'

export const SinglePost = ({ id, title, body }) => {
	const dispatch = useDispatch()
	const handleDelete = () => {
		dispatch(deletePost(id))
	}
	return (
		<Card>
			<h2>{title}</h2>
			<p>{body}</p>
			<button onClick={handleDelete}>Delete</button>
		</Card>
	)
}
