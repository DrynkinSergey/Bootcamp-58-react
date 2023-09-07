import React from 'react'
import { styled } from 'styled-components'

export const Button = props => {
	return <StyledButton {...props}>{props.children}</StyledButton>
}

export const StyledButton = styled.button`
	border: none;
	box-shadow: ${({ theme }) => theme.shadows.xl};
	/* background-color: ${props => props.$bg}; */
	background-color: ${props => props.theme.colors.accent};
	font-size: 2rem;
	color: ${props => props.$color || 'black'};
	padding: 8px 15px;
	margin: 5px;
	cursor: pointer;
	transition: all 0.2s ease;
	&:hover {
		background-color: teal;
	}
`
