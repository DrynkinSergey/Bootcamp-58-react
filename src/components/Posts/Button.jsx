import React from 'react'
import styled from 'styled-components'

export const Button = props => {
	return <StyledButton {...props} />
}
const StyledButton = styled.button`
	padding: 10px 12px;
	width: 200px;
	background-color: ${props => props.$bg};
	margin: 20px auto;
	&:disabled {
		background-color: red;
	}
`
