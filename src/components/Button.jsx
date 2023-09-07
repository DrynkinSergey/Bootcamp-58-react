import React from 'react'
import { styled } from 'styled-components'

export const Button = props => {
	return <StyledButton {...props}>{props.children}</StyledButton>
}

export const StyledButton = styled.button`
	border: none;
	box-shadow: 2px 2px 1px 2px gray;
	background-color: ${props => props.$bg};
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
