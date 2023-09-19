import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useHttp } from '../hooks/useHttp'
import { getUserById } from '../service/api'

const SingleUser = () => {
	const { id } = useParams()
	const { data: user, loading, error } = useHttp(getUserById, id)

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
