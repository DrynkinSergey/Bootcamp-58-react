import { Button, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodoThunk } from '../../redux/todoList/operations'

const AddForm = () => {
	const dispatch = useDispatch()
	const [value, setValue] = useState('')
	const submit = e => {
		e.preventDefault()
		dispatch(addTodoThunk({ text: value }))
		setValue('')
	}
	return (
		<div className='flex justify-center'>
			<form onSubmit={submit} className='flex gap-5 py-4 px-2'>
				<TextInput value={value} onChange={e => setValue(e.target.value)} placeholder='Type the text....' required />
				<Button type='submit'>Submit</Button>
			</form>
		</div>
	)
}

export default AddForm
