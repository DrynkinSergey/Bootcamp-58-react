import React from 'react'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'

export class Counter extends React.Component {
	static defaultProps = {
		title: 'Default props by component',
	}

	state = {
		counter: 0,
		step: 1,
		loading: false,
		name: 'Petro',
	}

	increment = () => {
		//setState з колбеком, котрий йде після виконання зміни
		// this.setState({ counter: this.state.counter + 1 }, () => {
		// 	console.log(this.state.counter)
		// })
		this.setState(prev => ({ counter: prev.counter + prev.step, step: 21 }))
	}
	decrement = () => {
		// this.setState({ counter: this.state.counter - 1 })
		this.setState(prev => ({ counter: prev.counter - prev.step }))
	}
	reset = () => {
		this.setState({ counter: 0, step: 1 })
	}
	handleChangeStep = e => {
		this.setState({ step: +e.target.value })
	}
	result = () => {
		return 23 + 2
	}

	render() {
		const { title } = this.props
		const { counter, step } = this.state
		return (
			<FlexContainer>
				<StyledCounter>
					<h4>{title}</h4>
					<h1>{counter}</h1>
					<input type='text' value={step} onChange={this.handleChangeStep} />
					<Flex>
						<StyledButton onClick={this.decrement}>minus</StyledButton>
						<StyledButton onClick={this.reset}>reset</StyledButton>
						<StyledButton onClick={this.increment}>plus</StyledButton>
					</Flex>
				</StyledCounter>
			</FlexContainer>
		)
	}
}

// export const Counter = () => {
// 	const sayHi = e => {
// 		console.log(e)
// 		console.log('Hello')
// 	}

// 	const grit = name => {
// 		console.log('Hello ' + name + ' How are you?')
// 	}
// 	let count = 10
// 	const inc = () => {
// 		count += 1
// 	}
// return (
// 	<FlexContainer>
// 		<StyledCounter>
// 			<h1 onClick={() => grit('Petya')}>{count}</h1>
// 			<Flex>
// 				<StyledButton onClick={() => grit('Oleh')}>minus</StyledButton>

// 				<StyledButton>reset</StyledButton>
// 				<StyledButton onClick={inc}>plus</StyledButton>
// 			</Flex>
// 		</StyledCounter>
// 	</FlexContainer>
// )
// }
