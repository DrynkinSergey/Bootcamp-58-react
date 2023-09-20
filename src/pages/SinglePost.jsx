import React, { useRef } from 'react'
import { useHttp } from '../hooks/useHttp'
import { getPostById } from '../service/api'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom'

const SinglePost = () => {
	const { postId } = useParams()
	const { data } = useHttp(getPostById, postId)
	const location = useLocation()
	const goBackRef = useRef(location.state?.from || '/')
	return (
		<div>
			<Link to={goBackRef.current}>Go back</Link>
			<h1>Post #{postId}</h1>
			<hr />
			<h2>{data?.title}</h2>
			<p>{data?.body}</p>
			<hr />
			<Link to='comments'>Show comments by post</Link>
			<Outlet />
		</div>
	)
}

export default SinglePost
