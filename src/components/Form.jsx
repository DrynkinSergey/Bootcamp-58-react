import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
const Form = () => {
	const schema = yup.object().shape({
		name: yup.string().required().min(4).max(10),
		email: yup.string().email().required(),
		age: yup.number().required(),
		password: yup.string().required(),
		passwordConfirm: yup.string().oneOf([yup.ref('password')]),
	})
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) })
	const submit = data => {
		console.log(data)
	}
	return (
		<div className='flex justify-center items-center min-h-screen '>
			<form onSubmit={handleSubmit(submit)} className='bg-gray-400 px-5 py-8 grid gap-2'>
				<label className='grid gap-2'>
					Name
					<input {...register('name')} placeholder='type the name...' className='px-4 py-2' />
				</label>
				<label className='grid gap-2'>
					Email
					<input {...register('email')} placeholder='type the email...' className='px-4 py-2' />
				</label>
				<label className='grid gap-2'>
					Age
					<input {...register('age')} placeholder='type the age...' className='px-4 py-2' />
				</label>
				<label className='grid gap-2'>
					Password
					<input {...register('password')} placeholder='type the pass...' className='px-4 py-2' />
				</label>
				<label className='grid gap-2'>
					Confirm password
					<input {...register('passwordConfirm')} placeholder='type the pass...' className='px-4 py-2' />
				</label>
				<button className='border-2 border-black'>Submit</button>
			</form>
		</div>
	)
}

export default Form
