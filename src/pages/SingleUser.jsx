import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleUser = () => {
	const { id } = useParams()
	const [user, setUser] = useState({})
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	useEffect(() => {
		setLoading(true)
		const getData = async () => {
			setLoading(true)
			try {
				const { data } = await axios.get(`https://dummyjson.com/users/${id}`)
				setUser(data)
				setLoading(false)
			} catch (error) {
				setError(error.message)
				setLoading(false)
			}
		}

		getData()
	}, [id])
	return (
		<div>
			<h2>User - {user.firstName}</h2>
			<hr />
			<div>
				<img src={user.image} alt={user.firstName} />
				<h3>Name: {user.firstName}</h3>
				<h3>Surname: {user.lastName}</h3>
				<h3>Email: {user.email}</h3>
				<h3>Age: {user.age}</h3>
			</div>
		</div>
	)
}

export default SingleUser
