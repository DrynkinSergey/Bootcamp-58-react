import React from 'react'
import { StyledFlex } from '../../styledComponents/StyledFlex'
import styled from 'styled-components'
import StyledLabel from '../../styledComponents/StyledLabel'
import StyledButton from '../../styledComponents/StyledButton'

const Login = () => {
	const onSubmit = e => {
		e.preventDefault()
		const form = e.currentTarget
		const name = form.elements.name.value
		const surname = form.elements.surname.value
		const email = form.elements.email.value
		console.log({ name, surname, email })
		form.reset()
	}

	return (
		<StyledForm onSubmit={onSubmit}>
			<StyledFlex $gap='20px' $direction='column'>
				<h1>Login Form</h1>
				<StyledLabel>
					First Name
					<input name='name' placeholder='Enter name...' />
				</StyledLabel>
				<StyledLabel>
					Last Name
					<input name='surname' placeholder='Enter surname...' />
				</StyledLabel>
				<StyledLabel>
					Email
					<input name='email' placeholder='Enter email...' />
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
