import { createReducer } from '@reduxjs/toolkit'
import { decrement, increment, reset, setStep } from './actions'
import { DECREMENT, INCREMENT, RESET, SET_STEP } from './constants'

const initialState = {
	counter: 1,
	step: 1,
}

export const counterReducer = createReducer(initialState, builder => {
	builder
		.addCase(increment, (state, action) => {
			state.counter = state.counter + state.step
		})
		.addCase(decrement, (state, action) => {
			state.counter = state.counter - state.step
		})
		.addCase(reset, (state, action) => {
			// state.counter = 0
			return {
				...state,
				counter: 0,
			}
		})
		.addCase(setStep, (state, action) => (state.step = action.payload))
})

// Tooklit reducer old variant
// export const counterReducer = createReducer(initialState, {
// 	[increment]: (state, action) => {
// 		state.counter = state.counter + state.step
// 	},
// [decrement]: (state, action) => {
// 	state.counter = state.counter - state.step
// },
// [reset]: (state, action) => {
// 	state.counter = 0
// },
// 	[setStep]: (state, action) => {
// 		state.setStep = action.payload
// 	},
// })

// export const counterReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case increment.type:
// 			return {
// 				...state,
// 				counter: state.counter + state.step,
// 			}
// 		case reset.toString():
// 			return {
// 				...state,
// 				counter: 0,
// 			}
// 		case decrement.type:
// 			return {
// 				...state,
// 				counter: state.counter - state.step,
// 			}
// 		case setStep.type:
// 			return {
// 				...state,
// 				step: action.payload,
// 			}
// 		default:
// 			return state
// 	}
// }
