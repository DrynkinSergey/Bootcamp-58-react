import React, { useEffect, useRef, useState } from 'react'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'

// export class Counter extends React.Component {
// 	state = {
// 		counter: 0,
// 		step: 1,
// 	}
// 	componentDidMount() {
// 		console.log('Counter is ready to work')
// 	}
// 	componentDidUpdate(_, prevState) {
// 		if (this.state.counter === 5) {
// 		}
// 		if (this.state.counter === 6) {
// 			this.setState({ counter: 0 })
// 		}
// 		if (this.state.step !== prevState.step) {
// 			alert('Step is change')
// 		}
// 	}

// 	increment = () => {
// 		this.setState(prev => ({ counter: prev.counter + prev.step }))
// 	}
// 	decrement = () => {
// 		this.setState(prev => ({ counter: prev.counter - prev.step }))
// 	}
// 	reset = () => {
// 		this.setState({ counter: 0, step: 1 })
// 	}
// 	handleChangeStep = e => {
// 		this.setState({ step: +e.target.value })
// 	}
// 	result = () => {
// 		return 23 + 2
// 	}

// 	render() {
// 		const { counter, step } = this.state
// return (
// 	<FlexContainer>
// 		<StyledCounter>
// 			<h1>{counter}</h1>
// 			<input type='text' value={step} onChange={this.handleChangeStep} />
// 			<Flex>
// 				<StyledButton onClick={this.decrement}>minus</StyledButton>
// 				<StyledButton onClick={this.reset}>reset</StyledButton>
// 				<StyledButton onClick={this.increment}>plus</StyledButton>
// 				{counter > 3 && <Btn counter={this.state.counter} />}
// 			</Flex>
// 		</StyledCounter>
// 	</FlexContainer>
// )
// 	}
// }

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
		// this.setState(prev => ({ counter: prev.counter + prev.step }))

		setName('Stepan')

		setUser({
			...user,
			name: 'Andre',
		})
		setCounter(prev => prev + step)
	}

	const decrement = () => {
		// this.setState(prev => ({ counter: prev.counter - prev.step }))
		setCounter(prev => prev - step)
	}

	const reset = () => {
		// this.setState({ counter: 0, step: 1 })
		setCounter(0)
	}

	const handleChangeStep = e => {
		// this.setState({ step: +e.target.value })
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
