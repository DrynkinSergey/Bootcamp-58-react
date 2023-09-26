import React from 'react'
import Post from './Post'
import { useSelector } from 'react-redux'
import { selectFilter, selectPosts } from '../redux/selectors'
import NoPost from './NoPost'
import { getFilteredData } from '../helpers/getFiltered'

const PostsList = () => {
	const posts = useSelector(selectPosts)
	const filter = useSelector(selectFilter)
	if (!posts.length) {
		return <NoPost />
	}

	return (
		<div className='px-[200px] py-4'>
			<h1 className='text-center text-5xl py-2 font-bold'>Posts</h1>
			<ul className='grid gap-3 grid-cols-2'>
				{getFilteredData(filter, posts).map(post => (
					<Post key={post.id} {...post} />
				))}
			</ul>
		</div>
	)
}

export default PostsList
