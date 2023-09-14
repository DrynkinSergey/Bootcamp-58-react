import React from 'react'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'
import Btn from './Btn'

export class Counter extends React.Component {
	state = {
		counter: 0,
		step: 1,
	}
	componentDidMount() {
		console.log('Counter is ready to work')
	}
	componentDidUpdate(_, prevState) {
		if (this.state.counter === 5) {
		}
		if (this.state.counter === 6) {
			this.setState({ counter: 0 })
		}
		if (this.state.step !== prevState.step) {
			alert('Step is change')
		}
	}

	increment = () => {
		this.setState(prev => ({ counter: prev.counter + prev.step }))
	}
	decrement = () => {
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
		const { counter, step } = this.state
		return (
			<FlexContainer>
				<StyledCounter>
					<h1>{counter}</h1>
					<input type='text' value={step} onChange={this.handleChangeStep} />
					<Flex>
						<StyledButton onClick={this.decrement}>minus</StyledButton>
						<StyledButton onClick={this.reset}>reset</StyledButton>
						<StyledButton onClick={this.increment}>plus</StyledButton>
						{counter > 3 && <Btn counter={this.state.counter} />}
					</Flex>
				</StyledCounter>
			</FlexContainer>
		)
	}
}
