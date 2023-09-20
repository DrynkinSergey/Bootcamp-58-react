import React, { useRef } from 'react'
import { useHttp } from '../hooks/useHttp'
import { getPostById } from '../service/api'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom'

const SinglePost = () => {
	// 1. Отримаємо постАйді через хук useParams
	const { postId } = useParams()
	// 2. Отримаємо один пост через власний хук, передаємо айді для пошуку
	const { data } = useHttp(getPostById, postId)
	// 3. Використовуємо useLocation, щоб отримати в стейт самої локації те, звідки ми прийшли!
	// Якщо ми потрапимо на цю сторінку з нової - там буде null
	// Тому треба заглушка '/'
	const location = useLocation()
	// 4. Створюємо реф, Для того, щоб записати отриманий об'єкт локації
	// Реф не дасть перезатертись посиланню
	// Також ставимо заглушку '/' і обов'язково оператор умовної перевірки (елвіс) ? перед from
	const goBackRef = useRef(location.state?.from || '/')
	console.log(location)
	return (
		<div>
			{/* Використовуємо наш реф, щоб повернутись назад зі всіма параметрами */}
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
