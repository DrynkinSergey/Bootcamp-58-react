import React, { useContext, useState } from 'react'
import { StyledFlex } from '../../styledComponents/StyledFlex'
import styled from 'styled-components'
import StyledLabel from '../../styledComponents/StyledLabel'
import StyledButton from '../../styledComponents/StyledButton'
import { useAuth } from '../../hooks/useAuth'
import { useLocation, useNavigate } from 'react-router-dom'

const Login = () => {
	const { login } = useAuth()
	const [name, setName] = useState('')
	const [surname, setSurname] = useState('')
	const [email, setEmail] = useState('')
	const location = useLocation()
	const navigate = useNavigate()
	const onSubmit = e => {
		e.preventDefault()
		login(name)
		navigate(location.state?.from)
		setName('')
		setSurname('')
		setEmail('')
	}

	return (
		<StyledFlex $center>
			<StyledForm onSubmit={onSubmit}>
				<StyledFlex $gap='20px' $direction='column'>
					<h1>Login Form</h1>
					<StyledLabel>
						First Name
						<input
							value={name}
							onChange={({ target }) => setName(target.value)}
							name='name'
							placeholder='Enter name...'
						/>
					</StyledLabel>
					<StyledLabel>
						Last Name
						<input
							value={surname}
							onChange={({ target }) => setSurname(target.value)}
							name='surname'
							placeholder='Enter surname...'
						/>
					</StyledLabel>
					<StyledLabel>
						Email
						<input
							value={email}
							onChange={({ target }) => setEmail(target.value)}
							name='email'
							placeholder='Enter email...'
						/>
					</StyledLabel>
					<StyledButton>Submit</StyledButton>
				</StyledFlex>
			</StyledForm>
		</StyledFlex>
	)
}
const StyledForm = styled.form`
	background-color: white;
	max-width: 50vw;
	padding: 10px 22px;
	box-shadow: ${({ theme }) => theme.shadows.md};
`
export default Login
