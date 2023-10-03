import { useDispatch } from 'react-redux'
import { EditTaskForm } from './EditTaskForm'
import { editTask } from '../../redux/table/slice'
export const TableDialogEditTask = props => {
	const dispatch = useDispatch()

	const submit = data => {
		dispatch(editTask({ id: props.id, data }))
	}
	return <EditTaskForm {...props} onSubmitFn={submit} />
}
