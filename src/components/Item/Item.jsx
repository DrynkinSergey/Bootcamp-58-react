import React, { useEffect, useState } from 'react'

export const Item = ({ item, deleteItem, moveTo, currentTable, optionNames }) => {
	const [selectName, setSelectName] = useState(currentTable)
	const { title, id } = item
	const handleChange = e => {
		moveTo(id, selectName)
	}

	return (
		<li className='border-2   border-black p-2 shadow-lg flex justify-between'>
			<span>{title}</span> <button onClick={deleteItem}>Delete</button>{' '}
			<select onChange={e => moveTo(id, e.target.value)}>
				<option disabled selected value=''>
					Move to
				</option>
				{optionNames.map(
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
