import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addPost } from '../../redux/posts/slice'
import { nanoid } from '@reduxjs/toolkit'
const Form = () => {
	const { register, handleSubmit } = useForm()
	const dispatch = useDispatch()
	const submit = data => {
		console.log(data)
		dispatch(addPost({ ...data, id: nanoid() }))
	}
	return (
		<form onSubmit={handleSubmit(submit)}>
			<input {...register('title', { required: true })} />
			<textarea {...register('body', { required: true, minLength: 10 })} />
			<button>Add post</button>
		</form>
	)
}

export default Form
