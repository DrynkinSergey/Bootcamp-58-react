import { useDispatch, useSelector } from 'react-redux'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'
import { increment } from '../../redux/counter/actions'
export const Counter = () => {
	const counter = useSelector(state => state.counter)
	const dispatch = useDispatch()
	return (
		<FlexContainer>
			<StyledCounter>
				<h1>{counter}</h1>

				<input type='text' />
				<Flex>
					<StyledButton>minus</StyledButton>
					<StyledButton>reset</StyledButton>
					<StyledButton onClick={() => dispatch(increment())}>plus</StyledButton>
				</Flex>
			</StyledCounter>
		</FlexContainer>
	)
}
