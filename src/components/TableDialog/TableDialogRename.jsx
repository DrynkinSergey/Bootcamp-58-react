import { useDispatch } from 'react-redux'

import { RenameTableForm } from './RenameTableForm'
import { renameTable } from '../../redux/tables/slice'
export const TableDialogRename = ({ close, title, table }) => {
	const dispatch = useDispatch()

	const submit = data => {
		dispatch(renameTable({ oldTable: table, newTable: data.name }))
	}
	return <RenameTableForm table={table} close={close} onSubmitFn={submit} />
}
