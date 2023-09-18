import React, { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'
const data = ['1', 2, 3, 4, 5, 6, 11]
export const Counter = () => {
	const initialState = {
		counter: 0,
		step: 1,
	}

	const counterReducer = (state, action) => {
		console.log(action)
		switch (action.type) {
			case 'INCREMENT':
				return {
					...state,
					counter: state.counter + state.step,
				}
			case 'decrement':
				return {
					...state,
					counter: state.counter - state.step,
				}
			case 'RESET':
				return {
					...state,
					counter: 0,
					step: 1,
				}
			case 'SET_STEP':
				return {
					...state,
					step: action.payload,
				}
			default:
				return state
		}
	}

	const [state, dispatch] = useReducer(counterReducer, initialState)

	// const sum = value => {
	// 	console.log('CALC SOME DATA')
	// 	for (let i = 1; i < 10000000000; i++) {}
	// 	return value * 2
	// }

	// const getFilteredData = useCallback(step => {
	// 	console.log('FIlter data')
	// 	return data.filter(item => item > 4)
	// }, [])

	//1x01dr
	//0dd101
	//1xd01r

	// const resData = useMemo(() => {
	// 	return getFilteredData(step)
	// }, [step, getFilteredData])

	// const result = useMemo(() => {
	// 	return sum(step)
	// }, [step])
	// const res = sum(step)
	const increment = () => {
		dispatch({ type: 'INCREMENT' })
		// setCounter(prev => prev + step)
	}

	const decrement = () => {
		// setCounter(prev => prev - step)
		dispatch({ type: 'decrement' })
	}

	const reset = () => {
		// setCounter(0)
		dispatch({ type: 'RESET' })
	}

	const handleChangeStep = e => {
		// setStep(+e.target.value)
		dispatch({ type: 'SET_STEP', payload: +e.target.value })
	}

	return (
		<FlexContainer>
			<StyledCounter>
				<h1>{state.counter}</h1>

				<input type='text' value={state.step} onChange={handleChangeStep} />
				<Flex>
					<StyledButton onClick={decrement}>minus</StyledButton>
					<StyledButton onClick={reset}>reset</StyledButton>
					<StyledButton onClick={increment}>plus</StyledButton>
				</Flex>
			</StyledCounter>
		</FlexContainer>
	)
}
