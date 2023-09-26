import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addPost } from '../redux/postsSlice'
import { nanoid } from 'nanoid'
import { toast } from 'react-toastify'

const Form = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const submit = data => {
		dispatch(addPost({ ...data, id: nanoid() }))
		toast.success('Congratulation!!')
		navigate('/posts')
	}
	const cancelClick = () => {
		navigate('/posts')
	}
	return (
		<form onSubmit={handleSubmit(submit)} className='grid gap-2 '>
			<input
				type='text'
				placeholder='Enter post title'
				className='input input-bordered input-primary w-[400px] max-w-md'
				{...register('title', { required: true })}
			/>
			{errors.title && <span className='text-red-500'>This field is required!</span>}
			<textarea
				className='textarea min-h-[100px] textarea-primary max-h-[200px]'
				placeholder='Enter post body'
				{...register('body', { required: true })}
			></textarea>

			{errors.body && <span className='text-red-500'>This field is required!</span>}
			<select
				defaultValue=''
				className='select select-primary w-full max-w-md '
				{...register('tag', { required: true })}
			>
				<option disabled value=''>
					Select tag
				</option>
				<option>Programming</option>
				<option>Love</option>
				<option>News</option>
				<option>Etc.</option>
			</select>
			{errors.tag && <span className='text-red-500'>This field is required!</span>}
			<button className='btn btn-outline btn-primary'>Add</button>
			<button type='button' onClick={cancelClick} className='btn btn-outline btn-accent'>
				Cancel
			</button>
		</form>
	)
}

export default Form
