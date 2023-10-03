import { useDispatch } from 'react-redux'
import { AddTaskForm } from './AddTaskForm'
import { addTask } from '../../redux/table/slice'
import { nanoid } from '@reduxjs/toolkit'
export const TableDialogAdd = ({ close, title, table }) => {
	const dispatch = useDispatch()

	const submit = data => {
		const newData = { ...data, id: nanoid() }
		dispatch(addTask(newData))
	}
	return <AddTaskForm table={table} close={close} onSubmitFn={submit} />
}
