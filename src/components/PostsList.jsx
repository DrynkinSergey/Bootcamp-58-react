import React from 'react'
import Post from './Post'
import { useSelector } from 'react-redux'
import { selectFilter, selectIsAgree, selectIsOpen, selectPosts } from '../redux/selectors'
import NoPost from './NoPost'
import { getFilteredData } from '../helpers/getFiltered'
import { Modal } from './Modal'

const PostsList = () => {
	const posts = useSelector(selectPosts)
	const filter = useSelector(selectFilter)
	const isOpen = useSelector(selectIsOpen)
	if (!posts.length) {
		return <NoPost />
	}

	return (
		<div className='relative z-0 md:px-[50px] px-2 py-4'>
			<h1 className='text-center text-5xl py-2 font-bold'>Posts</h1>
			<ul className='grid gap-3 md:grid-cols-2 lg:grid-cols-3'>
				{getFilteredData(filter, posts).map((post, idx) => (
					<Post key={post.id} {...post} idx={idx} />
				))}
			</ul>
			{isOpen ? <Modal /> : null}
		</div>
	)
}

export default PostsList
