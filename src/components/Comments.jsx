import React from 'react'
import { useHttp } from '../hooks/useHttp'
import { getPostComments } from '../service/api'
import { useParams } from 'react-router-dom'

const Comments = () => {
	const { postId } = useParams()
	const { data } = useHttp(getPostComments, postId)
	return (
		<div>
			<h2>Comments by postID</h2>
			<hr />
			<ul>
				{data?.map(comment => (
					<li key={comment.id}>{comment.body}</li>
				))}
			</ul>
		</div>
	)
}

export default Comments
