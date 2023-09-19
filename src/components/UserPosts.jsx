import React, { useState } from 'react'
import { useHttp } from '../hooks/useHttp'
import { getPostsByUserID } from '../service/api'
import { useParams } from 'react-router-dom'
import { useToggle } from '../hooks/useToggle'
import Modal from './Modal/Modal'

const UserPosts = () => {
	const { id } = useParams()
	const { data } = useHttp(getPostsByUserID, id)
	const [post, setPost] = useState(null)
	const { toggle, isOpen } = useToggle()
	const getOnePost = id => {
		const item = data.find(item => item.id === id)
		setPost(item)
		toggle()
	}
	return (
		<div>
			<ol>
				{data?.map(item => (
					<li onClick={() => getOnePost(item.id)} key={item.id}>
						{item.title}
					</li>
				))}
				{isOpen && (
					<Modal close={toggle}>
						<h2>{post?.title}</h2>
						<p>{post?.body}</p>
					</Modal>
				)}
			</ol>
		</div>
	)
}

export default UserPosts
