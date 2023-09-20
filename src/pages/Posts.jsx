import React from 'react'
import { useHttp } from '../hooks/useHttp'
import { getPostsByQuery } from '../service/api'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useSearchParams } from 'react-router-dom'

const Posts = () => {
	const { register, handleSubmit } = useForm()

	// 1. Використовуємо хук для зміни URL, отримуємо параметри, та функцію, котра ставить ці параметри
	const [searchParams, setSearchParams] = useSearchParams()

	// 2. При використанні сабміта, встановлюємо параметр query в наш url
	const submit = data => {
		setSearchParams(data.queryStr && { query: data.queryStr })
	}
	// 3. Витягуємо query з нашого url через першу сущність хука useSearchParams
	const query = searchParams.get('query') || ''

	// 4. Робимо запит через власний хук useHttp, передаючи туди query в якості параметра пошуку
	const { data } = useHttp(getPostsByQuery, query)

	// 5. Створюємо об'єкт location, для того, щоб отримати поточний стан нашого url
	// Це необхідно для передачі локейшен в компонент 'SinglePost'
	const location = useLocation()

	return (
		<div>
			<form onSubmit={handleSubmit(submit)}>
				<input {...register('queryStr')} type='text' />
				<button>Search</button>
			</form>

			<ol>
				{data?.map(post => (
					<li key={post.id}>
						{/* // 6. Викоритовуємо новий пропс state в LINK для того щоб передати об'єкт локації
            для компонента SinglePost.
            І ми будемо мати змогу повернутись на останнє положення нашого location, де буде знаходитись
             поле query.
             =>>>>>> Йдемо до компонента singlePost і продовжуємо
            */}
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
