import React from 'react'
import { SinglePost } from './SinglePost'
import { Wrapper } from './Posts.styled'
import { useSelector } from 'react-redux'

export const PostList = ({ posts = [] }) => {
	const loading = useSelector(state => state.posts.loading)
	const error = useSelector(state => state.posts.error)

	return (
		<>
			<h2>Our cute posts base</h2>
			<Wrapper>
				{loading && <h1>Loading</h1>}
				{/* {error && <h1>{error}</h1>} */}
				{posts.map(item => (
					<SinglePost key={item.id} {...item} />
				))}
			</Wrapper>
		</>
	)
}
