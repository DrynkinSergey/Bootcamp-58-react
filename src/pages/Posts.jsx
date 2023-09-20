import React from 'react'
import { useHttp } from '../hooks/useHttp'
import { getPostsByQuery } from '../service/api'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useSearchParams } from 'react-router-dom'

const Posts = () => {
	const { register, handleSubmit } = useForm()

	const submit = data => {
		setSearchParams(data.queryStr && { query: data.queryStr })
	}
	const [searchParams, setSearchParams] = useSearchParams()
	const query = searchParams.get('query') || ''
	const location = useLocation()
	console.log(location)

	const { data } = useHttp(getPostsByQuery, query)
	return (
		<div>
			<form onSubmit={handleSubmit(submit)}>
				<input {...register('queryStr')} type='text' />
				<button>Search</button>
			</form>

			<ol>
				{data?.map(post => (
					<li key={post.id}>
						<Link state={{ from: location }} to={post.id.toString()}>
							<h2>{post.title}</h2>
						</Link>
					</li>
				))}
			</ol>
		</div>
	)
}

export default Posts
