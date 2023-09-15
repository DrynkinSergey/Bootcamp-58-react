import React, { useState } from 'react'
import { StyledFlex } from '../../styledComponents/StyledFlex'
import styled from 'styled-components'
import StyledLabel from '../../styledComponents/StyledLabel'
import StyledButton from '../../styledComponents/StyledButton'

const Login = () => {
	const [name, setName] = useState('')
	const [surname, setSurname] = useState('')
	const [email, setEmail] = useState('')
	const onSubmit = e => {
		e.preventDefault()

		console.log({ name, surname, email })
		setName('')
		setSurname('')
		setEmail('')
	}

	return (
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
	)
}
const StyledForm = styled.form`
	background-color: white;
	padding: 10px 22px;
	box-shadow: ${({ theme }) => theme.shadows.md};
`
export default Login
