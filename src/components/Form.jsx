import React from 'react'

const Form = () => {
	return (
		<div className='flex justify-center items-center min-h-screen '>
			<form className='bg-gray-400 px-5 py-8 grid gap-2'>
				<label className='grid gap-2'>
					Name
					<input placeholder='type the name...' className='px-4 py-2' />
				</label>
				<label className='grid gap-2'>
					Email
					<input placeholder='type the email...' className='px-4 py-2' />
				</label>
				<label className='grid gap-2'>
					Age
					<input placeholder='type the age...' className='px-4 py-2' />
				</label>
				<label className='grid gap-2'>
					Password
					<input placeholder='type the pass...' className='px-4 py-2' />
				</label>
				<label className='grid gap-2'>
					Confirm password
					<input placeholder='type the pass...' className='px-4 py-2' />
				</label>
				<button className='border-2 border-black'>Submit</button>
			</form>
		</div>
	)
}

export default Form
