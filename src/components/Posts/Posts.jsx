import React, { useEffect, useReducer } from 'react'
import { Header } from './Header'
import { PostList } from './PostList'
import { WrapperPosts } from './Posts.styled'
import { Button } from './Button'
import { Spinner } from './Spinner'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../redux/posts/slice'
import Form from './Form'
import { fetchPosts } from '../../redux/posts/operations'

const Posts = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		// fetchPosts().then(res => dispatch(getPosts(res)))
		dispatch(fetchPosts())
	}, [dispatch])
	const { posts } = useSelector(state => state.posts)

	return (
		<>
			<Header />
			<Form />
			<WrapperPosts>
				<h1>Your query is: </h1>
				<PostList posts={posts} />
				<Button disabled={'loading'} $bg='teal'>
					Load more
				</Button>
			</WrapperPosts>
		</>
	)
}

export default Posts
