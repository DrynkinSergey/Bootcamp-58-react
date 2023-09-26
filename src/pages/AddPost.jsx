import React from 'react'
import Form from '../components/Form'
import { addPost } from '../redux/postsSlice'
import { nanoid } from 'nanoid'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AddPost = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const submit = data => {
		dispatch(addPost({ ...data, id: nanoid() }))
		toast.success('Congratulation!!')
		navigate('/posts')
	}
	return (
		<div className='grid justify-center items-center min-h-[90vh]'>
			<Form submit={submit} />
		</div>
	)
}

export default AddPost
