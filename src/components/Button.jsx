'use client'

import { Button } from 'flowbite-react'
import { AiOutlineLoading } from 'react-icons/ai'

export default function ButtonLoad({ isLoading, title }) {
	return (
		<div className='flex flex-wrap items-center gap-2'>
			{isLoading ? (
				<Button
					type='submit'
					isProcessing
					processingSpinner={<AiOutlineLoading className='h-6 w-6 animate-spin' />}
					size='md'
				>
					<p>Loading</p>
				</Button>
			) : (
				<Button type='submit' size='md'>
					<p>{title}</p>
				</Button>
			)}
		</div>
	)
}
