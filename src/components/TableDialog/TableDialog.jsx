import { MonitorX, SendHorizontal } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { addTable } from '../../redux/tables/slice'
import { selectTables } from '../../redux/tables/selectors'
import { toast } from 'react-toastify'
export const TableDialog = ({ close, title }) => {
	const { tables } = useSelector(selectTables)

	const dispatch = useDispatch()
	const schema = yup.object({
		name: yup.string().required('You must enter smt..').min(3, 'Must be more than 3').max(12, 'Must be less than 12'),
	})
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	})
	const submit = data => {
		console.log(data)
		const tableExist = tables.includes(data.name)
		if (tableExist) {
			return toast.error('You must enter another name!')
		}
		dispatch(addTable(data.name))
		reset()
		close()
	}
	return (
		<form className='flex flex-col' onSubmit={handleSubmit(submit)}>
			<input
				autoFocus
				className='border-2 border-black py-2  px-4'
				placeholder='Type the table name...'
				{...register('name')}
			/>
			<span className='mb-2 text-red-500 py-0'>{errors?.name && errors.name.message}</span>
			<div className='flex justify-center gap-4'>
				<button className='flex gap-2 bg-green-500 border-2 border-black px-1 py-1' type='submit'>
					OK <SendHorizontal />
				</button>
				<button className='flex bg-red-500 gap-2 border-2 border-black px-1 py-1' onClick={close}>
					Close <MonitorX />
				</button>
			</div>
		</form>
	)
}
