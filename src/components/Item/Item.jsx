import { useDispatch, useSelector } from 'react-redux'
import { deleteFromTable, moveTo } from '../../redux/table/slice'
import { selectTables } from '../../redux/tables/selectors'

export const Item = ({ item, currentTable, optionNames }) => {
	const dispatch = useDispatch()
	const { title, id } = item
	const { tables } = useSelector(selectTables)

	return (
		<li className='border-2   border-black p-2 shadow-lg flex justify-between'>
			<span>{title}</span> <button onClick={() => dispatch(deleteFromTable(item.id))}>Delete</button>{' '}
			<select onChange={e => dispatch(moveTo({ id, table: e.target.value }))}>
				<option disabled selected value=''>
					Move to
				</option>
				{tables.map(
					item =>
						item !== currentTable && (
							<option key={item} value={item}>
								{item}
							</option>
						)
				)}
			</select>
		</li>
	)
}
