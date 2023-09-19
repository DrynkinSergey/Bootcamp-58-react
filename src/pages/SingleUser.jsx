import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useNavigate, useParams } from 'react-router-dom'
import { useHttp } from '../hooks/useHttp'
import { getUserById } from '../service/api'
import { StyledLink } from '../components/Navbar'
import styled from 'styled-components'

const SingleUser = () => {
	const { id } = useParams()
	const { data: user, loading, error } = useHttp(getUserById, id)
	const navigate = useNavigate()
	return (
		<div>
			<button onClick={() => navigate(-1)}>GO BACK</button>
			<button onClick={() => navigate('/')}>GO HOME</button>

			<h2>User - {user?.firstName}</h2>
			<hr />
			<div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
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
							{/* <StyledLink to='address'>show address</StyledLink>
							<StyledLink to='posts'>show posts</StyledLink> */}
							<StyledL to='address'>show address</StyledL>
							<StyledL to='posts'>show posts</StyledL>
						</div>
					</div>
				)}
				<div style={{ backgroundColor: 'teal', width: '100%' }}>
					<Outlet />
				</div>
			</div>
		</div>
	)
}
// "address": {
// 	"address": "1745 T Street Southeast",
// 	"city": "Washington",
const StyledL = styled(NavLink)`
	text-decoration: none;
	border: 1px solid black;
	padding: 5px;
	margin-right: 10px;
	&.active {
		background-color: red;
	}
`
export default SingleUser
