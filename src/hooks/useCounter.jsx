import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { selectCounter, selectStep } from '../redux/counter/selectors'
import { decrement, increment, reset, setStep } from '../redux/counter/slice'

export const useCounter = () => {
	const counter = useSelector(selectCounter)
	const step = useSelector(selectStep)
	const dispatch = useDispatch()

	const handleUpdateStep = e => {
		dispatch(setStep(+e.target.value))
	}
	const resetCounter = () => {
		dispatch(reset())
		toast.info('Reset data!')
	}
	const handleMinus = () => {
		dispatch(decrement())
	}
	const handlePlus = () => {
		dispatch(increment())
	}

	return { handleMinus, handlePlus, resetCounter, handleUpdateStep, counter, step }
}
