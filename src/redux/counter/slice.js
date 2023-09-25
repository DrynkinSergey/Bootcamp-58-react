// Імпортуємо функцію для створення частини стейту
import { createSlice } from '@reduxjs/toolkit'

// Створюємо початковий стан
const initialState = {
	counter: 1,
	step: 1,
}

// Створюємо слайс, через функцію createSlice
// Передаємо набір параметрів в об'єкт
const slice = createSlice({
	//Ім'я слайсу
	name: 'counter',
	// Початковий стан
	initialState,
	// Екшен (функції) для зміни стейту
	reducers: {
		increment: (state, action) => {
			state.counter = state.counter + state.step
		},
		decrement: (state, action) => {
			state.counter = state.counter - state.step
		},
		reset: (state, action) => {
			state.counter = 0
		},
		setStep: (state, { payload }) => {
			state.step = payload
		},
	},
})

// Експорт редьюсера до стору

export const counterReducer = slice.reducer

//Експорт екшенів (функцій) до компонентів
export const { increment, decrement, reset, setStep } = slice.actions
