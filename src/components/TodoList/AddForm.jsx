import React, { useState } from 'react'
import { Flex } from '../../styles/GlobalStyles'
import { StyledInput } from './TodoList.styled'

const AddForm = ({ addTodo }) => {
	const [value, setValue] = useState()
	const submit = e => {
		e.preventDefault()
		addTodo(value)
		setValue('')
	}
	return (
		<Flex $height='auto'>
			<form onSubmit={submit}>
				<StyledInput type='text' value={value} onChange={e => setValue(e.target.value)} />
				<button>Add</button>
			</form>
		</Flex>
	)
}

export default AddForm
