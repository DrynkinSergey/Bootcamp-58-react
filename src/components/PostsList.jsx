import React from 'react'
import Post from './Post'
import { useSelector } from 'react-redux'
import { selectPosts } from '../redux/selectors'
import NoPost from './NoPost'

const PostsList = () => {
	const posts = useSelector(selectPosts)
	if (!posts.length) {
		return <NoPost />
	}
	return (
		<>
			<h1 className='text-center text-5xl py-2 font-bold'>Posts</h1>
			<ul className='grid gap-3 grid-cols-2'>
				{posts.map(post => (
					<Post key={post.id} {...post} />
				))}
			</ul>{' '}
		</>
	)
}

export default PostsList
