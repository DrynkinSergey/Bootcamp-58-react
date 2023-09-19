import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { useHttp } from '../hooks/useHttp'
import { getUserById } from '../service/api'
import { StyledLink } from '../components/Navbar'

const SingleUser = () => {
	const { id } = useParams()
	const { data: user, loading, error } = useHttp(getUserById, id)

	return (
		<div>
			<h2>User - {user?.firstName}</h2>
			<hr />
			{user && (
				<div>
					<img width='100' height='100' src={user.image} alt={user.firstName} />
					<h3>Name: {user.firstName}</h3>
					<h3>Surname: {user.lastName}</h3>
					<h3>Email: {user.email}</h3>
					<h3>Age: {user.age}</h3>
					<hr />
					<h2>User info address</h2>
					{/* {user.address && <h3>{user.address.city}</h3>} */}
					<h3>{user.address.city}</h3>
					<div>
						<StyledLink to='address'>show address</StyledLink>
						<StyledLink to='posts'>show posts</StyledLink>
					</div>
					<Outlet />
				</div>
			)}
		</div>
	)
}
// "address": {
// 	"address": "1745 T Street Southeast",
// 	"city": "Washington",

export default SingleUser
