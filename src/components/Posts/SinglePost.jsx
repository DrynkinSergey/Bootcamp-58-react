import React from 'react'
import { Card } from './Posts.styled'
import { useDispatch } from 'react-redux'
import { deletePostThunk, updatePostThunk } from '../../redux/posts/operations'

export const SinglePost = ({ id, title, body }) => {
	const dispatch = useDispatch()
	const handleDelete = () => {
		dispatch(deletePostThunk(id))
	}
	const handleUpdate = e => {
		dispatch(updatePostThunk({ id, body, title: prompt('Enter the text for post') }))
	}
	return (
		<Card>
			<h2 onClick={handleUpdate}>{title}</h2>
			<p>{body}</p>
			<button onClick={handleDelete}>Delete</button>
		</Card>
	)
}
