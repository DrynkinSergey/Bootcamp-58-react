import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { getAllUsers, getTodos } from '../service/api'
import { useHttp } from '../hooks/useHttp'

const Users = () => {
	const { data: users, loading, error } = useHttp(getAllUsers)

	return (
		<div>
			<h2>Users page</h2>
			{loading && <h2>Loading....</h2>}
			{error && <h2>Smth went wrong, try again!</h2>}
			<StyledList>
				{users.map(({ firstName, lastName, id }) => (
					<li key={id}>
						<Link to={id.toString()}>
							{firstName} {lastName}
						</Link>
					</li>
				))}
			</StyledList>
		</div>
	)
}

const StyledList = styled.ol`
	font-size: 1.5rem;
	display: grid;
	gap: 10px;
`

export default Users
