import React from 'react'
import { Card } from './Posts.styled'

export const SinglePost = ({ id, title, body }) => {
	return (
		<Card>
			<h2>{title}</h2>
			<p>{body}</p>
		</Card>
	)
}
