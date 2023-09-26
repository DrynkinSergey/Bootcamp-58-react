import React from 'react'
import Form from '../components/Form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { selectPostById } from '../redux/selectors'
import { updatePost } from '../redux/postsSlice'

const EditPage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { id } = useParams()
	const editedPost = useSelector(state => selectPostById(state, id))
	const submit = data => {
		dispatch(updatePost({ ...data, id }))
		toast.info('Post was edited!')
		navigate('/posts')
	}
	return (
		<div className='grid justify-center items-center min-h-[90vh]'>
			<Form submit={submit} isEdit editedPost={editedPost} />
		</div>
	)
}

export default EditPage
