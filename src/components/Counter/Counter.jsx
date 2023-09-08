import React from 'react'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'

export const Counter = () => {
	const sayHi = e => {
		console.log(e)
		console.log('Hello')
	}

	const grit = name => {
		console.log('Hello ' + name + ' How are you?')
	}
	let count = 10
	const inc = () => {
		count += 1
	}
	return (
		<FlexContainer>
			<StyledCounter>
				<h1 onClick={() => grit('Petya')}>{count}</h1>
				<Flex>
					<StyledButton onClick={() => grit('Oleh')}>minus</StyledButton>

					<StyledButton>reset</StyledButton>
					<StyledButton onClick={inc}>plus</StyledButton>
				</Flex>
			</StyledCounter>
		</FlexContainer>
	)
}
