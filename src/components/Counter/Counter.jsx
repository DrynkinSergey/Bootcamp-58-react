import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'
const data = ['1', 2, 3, 4, 5, 6, 11]
export const Counter = () => {
	const text = 'hello'
	const [counter, setCounter] = useState(0)
	const [step, setStep] = useState(1)
	const [name, setName] = useState(text)

	const sum = value => {
		console.log('CALC SOME DATA')
		for (let i = 1; i < 10000000000; i++) {}
		return value * 2
	}

	const getFilteredData = useCallback(step => {
		console.log('FIlter data')
		return data.filter(item => item > 4)
	}, [])

	//1x01dr
	//0dd101
	//1xd01r

	const resData = useMemo(() => {
		return getFilteredData(step)
	}, [step, getFilteredData])

	const result = useMemo(() => {
		return sum(step)
	}, [step])
	// const res = sum(step)
	const increment = () => {
		setCounter(prev => prev + step)
	}

	const decrement = () => {
		setCounter(prev => prev - step)
	}

	const reset = () => {
		setCounter(0)
	}

	const handleChangeStep = e => {
		setStep(+e.target.value)
	}

	return (
		<FlexContainer>
			<StyledCounter>
				<h1>{counter}</h1>

				<input type='text' value={step} onChange={handleChangeStep} />
				<input type='text' value={name} onChange={e => setName(e.target.value)} />
				<Flex>
					<StyledButton onClick={decrement}>minus</StyledButton>
					<StyledButton onClick={reset}>reset</StyledButton>
					<StyledButton onClick={increment}>plus</StyledButton>
				</Flex>
				<h1>{result}</h1>
			</StyledCounter>
		</FlexContainer>
	)
}
