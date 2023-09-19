import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Users = () => {
	const [users, setUsers] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	useEffect(() => {
		setLoading(true)
		const getData = async () => {
			setLoading(true)
			try {
				const { data } = await axios.get('https://dummyjson.com/users')
				setUsers(data.users)
				setLoading(false)
			} catch (error) {
				setError(error.message)
				setLoading(false)
			}
		}

		getData()
	}, [])
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
