import React, { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { CustomError } from './CustomError'
const Form = ({ login }) => {
	const schema = yup.object().shape({
		name: yup.string().required(),
		email: yup.string().email('Email is not valid').required(),
		age: yup.number().typeError('You must specify a number').min(11, 'Min value 11.').max(110, 'Max value 110.'),
		password: yup.string().required(),
		passwordConfirm: yup.string().oneOf([yup.ref('password')]),
	})
	const {
		register,
		handleSubmit,
		reset,
		getValues,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) })
	const submit = data => {
		console.log(data)
		login(data)
	}
	const passwordRef = useRef(null)

	return (
		<div className='flex justify-center items-center min-h-screen '>
			<form onSubmit={handleSubmit(submit)} className='bg-gray-400 px-5 py-8 grid gap-2'>
				<label className='grid gap-2'>
					Name
					<input {...register('name')} placeholder='type the name...' className='px-4 py-2' />
					<p className='text-red-700 capitalize text-lg font-bold'>{errors?.name && errors.name.message}</p>
				</label>
				<label className='grid gap-2'>
					Email
					<input {...register('email')} placeholder='type the email...' className='px-4 py-2' />
					<p className='text-red-700 capitalize text-lg font-bold'>{errors?.email && errors.email.message}</p>
				</label>
				<label className='grid gap-2'>
					Age
					<input {...register('age')} placeholder='type the age...' className='px-4 py-2' />
					<p className='text-red-700 capitalize text-lg font-bold'>{errors?.age && errors.age.message}</p>
				</label>
				<label className='grid gap-2'>
					Password
					<input ref={passwordRef} {...register('password')} placeholder='type the pass...' className='px-4 py-2' />
					<p className='text-red-700 capitalize text-lg font-bold'>{errors?.password && errors.password.message}</p>
				</label>
				<label className='grid gap-2'>
					Confirm password
					<input {...register('passwordConfirm')} placeholder='type the pass...' className='px-4 py-2' />
					<p className='text-red-700 capitalize text-lg font-bold'>
						{errors?.passwordConfirm && 'Password must be same!'}
					</p>
				</label>
				<button className='border-2 border-black'>Login</button>
			</form>
		</div>
	)
}

export default Form
