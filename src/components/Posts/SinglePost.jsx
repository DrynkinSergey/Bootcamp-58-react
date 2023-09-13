import React from 'react'

export const SinglePost = ({ id, title, body }) => {
	return (
		<li>
			<h2>{title}</h2>
			<p>{body}</p>
		</li>
	)
}
