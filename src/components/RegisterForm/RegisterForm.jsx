import React from 'react'
import { StyledFlex } from '../../styledComponents/StyledFlex'
import styled from 'styled-components'
import StyledLabel from '../../styledComponents/StyledLabel'
import StyledButton from '../../styledComponents/StyledButton'

const RegisterForm = () => {
	return (
		<StyledForm>
			<StyledFlex $gap='20px' $direction='column'>
				<h1>Hard Register Form</h1>
				<StyledLabel>
					First Name
					<input placeholder='Enter name...' />
				</StyledLabel>
				<StyledLabel>
					Last Name
					<input placeholder='Enter surname...' />
				</StyledLabel>
				<StyledLabel>
					Email
					<input placeholder='Enter email...' />
				</StyledLabel>
				<StyledLabel>
					Age
					<input type='number' placeholder='Enter age...' />
				</StyledLabel>
				<StyledLabel $display='flex'>
					<input type='checkbox' />
					I'm confirm this rules!
				</StyledLabel>
				<StyledLabel>
					Choose your country
					<select>
						<option value='ukraine'>Ukraine</option>
						<option value='usa'>USA</option>
						<option value='spain'>Spain</option>
					</select>
				</StyledLabel>
				<StyledFlex>
					<StyledLabel $display='flex'>
						<input type='radio' value='female' name='gender' />
						Male
					</StyledLabel>
					<StyledLabel $display='flex'>
						<input type='radio' value='female' name='gender' />
						Female
					</StyledLabel>
				</StyledFlex>
				<StyledLabel>
					Send us your letter
					<textarea placeholder='Are you so cool today!!' />
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
