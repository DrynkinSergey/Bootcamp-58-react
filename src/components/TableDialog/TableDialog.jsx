import { useDispatch } from 'react-redux'
import { addTable } from '../../redux/tables/slice'
import { AddTableForm } from './AddTableForm'
export const TableDialog = ({ close, title }) => {
	const dispatch = useDispatch()

	const submit = data => {
		dispatch(addTable(data.name))
	}
	return <AddTableForm close={close} onSubmitFn={submit} />
}
