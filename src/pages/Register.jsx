import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { registerThunk } from '../redux/auth/operations'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'

export const Register = () => {
	const { handleSubmit, register, reset } = useForm()
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const submit = data => {
		dispatch(registerThunk(data))
			.unwrap()
			.then(() => {
				toast.success('Welcome!')
				navigate('/todos')
			})
			.catch(() => toast.error('Data is not valid!'))
	}
	return (
		<section className='grid bg-gray-500 min-h-screen justify-center items-center'>
			<form className='grid gap-2 bg-white  px-4 py-4 shadow-2xl' onSubmit={handleSubmit(submit)}>
				<h2 className='text-center text-xl'>Register</h2>
				<label className='grid gap-3'>
					Name
					<input className='border-2 border-black' {...register('name')} />
				</label>
				<label className='grid gap-3'>
					Email
					<input className='border-2 border-black' {...register('email')} />
				</label>
				<label className='grid gap-3'>
					Password
					<input className='border-2 border-black' {...register('password')} />
				</label>
				<input className='border-2 border-black' type='submit' />
				<span>
					You already have account? Let's{' '}
					<Link to='/login' className='underline text-teal-500'>
						sign in!
					</Link>
				</span>
			</form>
		</section>
	)
}
