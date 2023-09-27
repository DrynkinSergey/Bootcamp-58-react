import React from 'react'
import { Card } from './Posts.styled'
import { useDispatch } from 'react-redux'
import { deletePostThunk } from '../../redux/posts/operations'

export const SinglePost = ({ id, title, body }) => {
	const dispatch = useDispatch()
	const handleDelete = () => {
		dispatch(deletePostThunk(id))
	}
	const handleUpdate = () => {
		// dispatch(updatePostThunk({ id, body, title: 'THUNk' }))
	}
	return (
		<Card onClick={handleUpdate}>
			<h2>{title}</h2>
			<p>{body}</p>
			<button onClick={handleDelete}>Delete</button>
		</Card>
	)
}
