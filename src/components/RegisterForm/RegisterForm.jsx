import React from 'react'
import { StyledFlex } from '../../styledComponents/StyledFlex'
import styled from 'styled-components'
import StyledLabel from '../../styledComponents/StyledLabel'
import StyledButton from '../../styledComponents/StyledButton'

const RegisterForm = () => {
	return (
		<StyledForm>
			<StyledFlex $gap='20px' $direction='column'>
				<h1>Register form</h1>
				<StyledLabel>
					First Name
					<input placeholder='Enter name...' />
				</StyledLabel>
				<StyledLabel>
					Last Name
					<input placeholder='Enter surname...' />
				</StyledLabel>
				<StyledLabel>
					Age
					<input type='number' placeholder='Enter age...' />
				</StyledLabel>
				<StyledLabel $display='flex'>
					<input type='checkbox' />
					I'm confirm this rules!
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
export default RegisterForm
