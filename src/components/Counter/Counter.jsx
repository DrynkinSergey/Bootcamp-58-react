import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'
import { useCounter } from '../../hooks/useCounter'
export const Counter = () => {
	const { counter, step, handleUpdateStep, handlePlus, handleMinus, resetCounter } = useCounter()
	return (
		<FlexContainer>
			<StyledCounter>
				<h1>{counter}</h1>

				<input type='text' value={step} onChange={handleUpdateStep} />
				<Flex>
					<StyledButton onClick={handleMinus}>minus</StyledButton>
					<StyledButton onClick={resetCounter}>reset</StyledButton>
					<StyledButton onClick={handlePlus}>plus</StyledButton>
				</Flex>
			</StyledCounter>
		</FlexContainer>
	)
}
