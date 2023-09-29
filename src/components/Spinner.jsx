import React from 'react'
import { Triangle } from 'react-loader-spinner'

export const Spinner = () => {
	return (
		<div className='min-h-screen flex bg-black justify-center items-center'>
			<Triangle
				height='380'
				width='380'
				color='teal'
				ariaLabel='triangle-loading'
				wrapperStyle={{}}
				wrapperClassName=''
				className='block'
				visible={true}
			/>
		</div>
	)
}
