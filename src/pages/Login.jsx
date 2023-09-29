import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { loginThunk, registerThunk } from '../redux/auth/operations'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'

export const Login = () => {
	const { handleSubmit, register, reset } = useForm()
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const submit = data => {
		dispatch(loginThunk(data))
			.unwrap()
			.then(res => {
				console.log(res)
				toast.success(`Welcome!${res.user.name}`)
				navigate('/todos')
			})
			.catch(() => toast.error('Data is not valid!'))
	}
	return (
		<section className='grid bg-gray-500 min-h-screen justify-center items-center'>
			<form className='grid gap-2 bg-white  px-4 py-4 shadow-2xl' onSubmit={handleSubmit(submit)}>
				<h2 className='text-center text-xl'>Login</h2>

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
					You haven't account? Let's{' '}
					<Link to='/register' className='underline text-teal-500'>
						create it
					</Link>
				</span>
			</form>
		</section>
	)
}
