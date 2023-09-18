import React, { useEffect, useReducer } from 'react'
import { Header } from './Header'
import { PostList } from './PostList'
import { fetchPosts, fetchPostsByQuery } from '../../services/postApi'
import { WrapperPosts } from './Posts.styled'
import { Button } from './Button'
import { Spinner } from './Spinner'
import { toast } from 'react-toastify'
import { initialState, postReducer } from '../../reducer/postReducer'

import { changeQuery, nextPage, setLimit, setLoading, setPosts } from '../../reducer/actions'

const Posts = () => {
	const [state, dispatch] = useReducer(postReducer, initialState)

	const { posts, skip, limitValue, loading, error, query } = state

	useEffect(() => {
		const getPostsFn = async fnType => {
			dispatch(setLoading(true))

			try {
				const { posts, limit } = await fnType({ limit: limitValue, skip, q: query })
				dispatch(setPosts(posts))
				dispatch(setLimit(limit))
			} catch (error) {
				alert(error.message)
			} finally {
				toast.success('You data is ready!')
				dispatch(setLoading(false))
			}
		}
		if (query) {
			getPostsFn(fetchPostsByQuery)
		} else {
			getPostsFn(fetchPosts)
		}
	}, [limitValue, skip, query])

	const handleLoadMore = () => {
		dispatch(nextPage())
	}
	const handleChangeQuery = queryStr => {
		dispatch(changeQuery(queryStr))
	}
	return (
		<>
			<Header onChangeQuery={handleChangeQuery} />
			<WrapperPosts>
				<h1>Your query is:{query} </h1>
				{loading && !posts.length ? <Spinner /> : <PostList posts={posts} />}
				<Button disabled={loading} onClick={handleLoadMore} $bg='teal'>
					{loading ? 'Loading...' : 'Load more'}
				</Button>
			</WrapperPosts>
		</>
	)
}

export default Posts
