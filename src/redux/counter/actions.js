import { createAction } from '@reduxjs/toolkit'

export const increment = createAction('increment')
export const decrement = createAction('decrement')
export const setStep = createAction('setStep')
export const reset = createAction('reset')
// export const increment = () => ({ type: INCREMENT })
// export const decrement = () => ({ type: DECREMENT })
// export const setStep = payload => ({ type: SET_STEP, payload })

// export const reset = () => ({ type: RESET })
