import React from 'react'
import Post from '../components/Post'
import PostsList from '../components/PostsList'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'
import { useSelector } from 'react-redux'
import { selectPosts } from '../redux/selectors'

const Posts = () => {
	const { width, height } = useWindowSize()
	const posts = useSelector(selectPosts)
	return (
		<section>
			<PostsList />
			{posts.length && <Confetti gravity={0.1} recycle={false} numberOfPieces={400} width={width} height={height} />}
		</section>
	)
}

export default Posts
