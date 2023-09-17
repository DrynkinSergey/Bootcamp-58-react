import React, { useEffect, useRef, useState } from 'react'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'

export const Counter = () => {
	const text = 'hello'
	const [counter, setCounter] = useState(0)
	const [step, setStep] = useState(1)
	const [name, setName] = useState(text)
	const [user, setUser] = useState({
		name: 'alex',
		email: 'alex@1.ua',
	})
	const countOfRenders = useRef(0)
	useEffect(() => {
		countOfRenders.current += 1
		console.log('RENDER COUNT : ', countOfRenders.current)
	})

	useEffect(() => {
		console.log('hello counter')
	}, [])
	useEffect(() => {
		if (counter > 3) {
			console.log('STOP CLICKING ON MY BUTTON')
		}
	}, [counter])
	useEffect(() => {
		console.log('counter or step was changed')
	}, [counter, step])

	const increment = () => {
		setName('Stepan')

		setUser({
			...user,
			name: 'Andre',
		})
		setCounter(prev => prev + step)
	}

	const decrement = () => {
		setCounter(prev => prev - step)
	}

	const reset = () => {
		setCounter(0)
	}

	const handleChangeStep = e => {
		setStep(e.target.value)
	}

	return (
		<FlexContainer>
			<StyledCounter>
				<h1>{counter}</h1>
				<input type='text' value={step} onChange={handleChangeStep} />
				<Flex>
					<StyledButton onClick={decrement}>minus</StyledButton>
					<StyledButton onClick={reset}>reset</StyledButton>
					<StyledButton onClick={increment}>plus</StyledButton>
				</Flex>
			</StyledCounter>
		</FlexContainer>
	)
}
