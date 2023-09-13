import React from 'react'
import { SinglePost } from './SinglePost'

export const PostList = ({ posts = [] }) => {
	return (
		<>
			<h2>Our cute posts base</h2>
			<ol>
				{posts.map(item => (
					<SinglePost key={item.id} {...item} />
				))}
			</ol>
		</>
	)
}
