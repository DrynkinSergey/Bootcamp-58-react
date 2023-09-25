import { decrement, increment, reset, setStep } from './actions'
import { DECREMENT, INCREMENT, RESET, SET_STEP } from './constants'

const initialState = {
	counter: 1,
	step: 1,
}
export const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case increment.type:
			return {
				...state,
				counter: state.counter + state.step,
			}
		case reset.toString():
			return {
				...state,
				counter: 0,
			}
		case decrement.type:
			return {
				...state,
				counter: state.counter - state.step,
			}
		case setStep.type:
			return {
				...state,
				step: action.payload,
			}
		default:
			return state
	}
}
