import { INCREMENT } from './constants'

const initialState = {
	counter: 1,
	step: 1,
}
export const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				counter: state.counter + state.step,
			}
		default:
			return state
	}
}
