import { yupResolver } from '@hookform/resolvers/yup'
import { MonitorX, SendHorizontal } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import * as yup from 'yup'
import { selectTables } from '../../redux/tables/selectors'

export const EditTaskForm = ({ close, onSubmitFn, table, title }) => {
	const { tables } = useSelector(selectTables)
	const schema = yup.object({
		title: yup.string().required('You must enter smt..').min(3, 'Must be more than 3').max(12, 'Must be less than 12'),
		table: yup.string().required('You must be'),
	})
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			table,
			title,
		},
		resolver: yupResolver(schema),
	})
	const submit = data => {
		onSubmitFn(data)
		reset()
		close()
	}
	return (
		<form className='flex flex-col py-4 gap-2' onSubmit={handleSubmit(submit)}>
			<input
				autoFocus
				className='border-2 border-black py-2  px-4'
				placeholder='Type the table title...'
				{...register('title')}
			/>
			<span className='mb-2 text-red-500 py-0'>{errors?.title && errors.title.message}</span>

			<select {...register('table')}>
				{tables.map(opt => (
					<option key={opt} value={opt}>
						{opt}
					</option>
				))}
			</select>

			<div className='flex mt-4 justify-center gap-4'>
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
