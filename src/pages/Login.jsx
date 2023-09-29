import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { loginThunk, registerThunk } from '../redux/auth/operations'
import { toast } from 'react-toastify'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import ButtonLoad from '../components/Button'
import { selectIsLoggedIn, selectLoading } from '../redux/auth/selectors'

export const Login = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn)
	const { handleSubmit, register } = useForm()
	const isLoading = useSelector(selectLoading)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const location = useLocation()
	const submit = data => {
		dispatch(loginThunk(data))
			.unwrap()
			.then(res => {
				toast.success(`Welcome!${res.user.name}`)
				navigate(location.state?.from ?? '/')
			})
			.catch(() => toast.error('Data is not valid!'))
	}
	if (isLoggedIn) {
		return <Navigate to='/todos' />
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
				<ButtonLoad isLoading={isLoading} title='Login' />

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
