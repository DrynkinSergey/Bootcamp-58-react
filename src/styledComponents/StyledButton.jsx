import React from 'react'
import styled from 'styled-components'

const StyledButton = props => {
	return <Button {...props} />
}
const Button = styled.button`
	padding: 5px 10px;
	box-shadow: ${({ theme }) => theme.shadows.default};
	background-color: teal;
	color: white;
	font-size: 1.2rem;
	cursor: pointer;
	transition: all 0.3s ease;
	&:hover {
		background-color: #014c4c;
	}
	&:disabled {
		background-color: gray;
		color: black;
	}
`
export default StyledButton
