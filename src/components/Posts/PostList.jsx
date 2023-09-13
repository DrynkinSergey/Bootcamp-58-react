import React from 'react'
import { SinglePost } from './SinglePost'
import { Wrapper } from './Posts.styled'

export const PostList = ({ posts = [] }) => {
	if (!posts.length) {
		return <h1>Nothing there</h1>
	}
	return (
		<>
			<h2>Our cute posts base</h2>
			<Wrapper>
				{posts.map(item => (
					<SinglePost key={item.id} {...item} />
				))}
			</Wrapper>
		</>
	)
}
