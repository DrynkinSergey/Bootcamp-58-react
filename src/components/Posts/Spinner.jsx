import React from 'react'
import { Comment } from 'react-loader-spinner'

export const Spinner = () => {
	return (
		<Comment
			visible={true}
			height='380'
			width='380'
			ariaLabel='comment-loading'
			wrapperStyle={{}}
			wrapperClass='comment-wrapper'
			color='#fff'
			backgroundColor='#F4442E'
		/>
	)
}
