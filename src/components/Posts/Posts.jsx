import React, { useEffect, useReducer } from 'react'
import { Header } from './Header'
import { PostList } from './PostList'
import { fetchPosts, fetchPostsByQuery } from '../../services/postApi'
import { WrapperPosts } from './Posts.styled'
import { Button } from './Button'
import { Spinner } from './Spinner'
import { toast } from 'react-toastify'

const Posts = () => {
	// useEffect(() => {
	// 	const getPostsFn = async fnType => {

	// 		try {
	// 			const { posts, limit } = await fnType({ limit: limitValue, skip, q: query })
	// 		} catch (error) {
	// 			alert(error.message)
	// 		} finally {
	// 			toast.success('You data is ready!')
	// 		}
	// 	}
	// 	if (query) {
	// 		getPostsFn(fetchPostsByQuery)
	// 	} else {
	// 		getPostsFn(fetchPosts)
	// 	}
	// }, [])

	return (
		<>
			<Header />
			<WrapperPosts>
				<h1>Your query is: </h1>
				<PostList posts={[]} />
				<Button disabled={'loading'} $bg='teal'>
					Load more
				</Button>
			</WrapperPosts>
		</>
	)
}

export default Posts
