import { DECREMENT, INCREMENT, RESET, SET_STEP } from './constants'

export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })
export const setStep = payload => ({ type: SET_STEP, payload })

export const reset = () => ({ type: RESET })
