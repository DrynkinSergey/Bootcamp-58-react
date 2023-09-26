import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setFilter } from '../redux/filterSlice'
import { selectFilter } from '../redux/selectors'
import { XCircle } from 'lucide-react'

export const Header = () => {
	const dispatch = useDispatch()
	const filter = useSelector(selectFilter)
	const changeFilter = e => {
		dispatch(setFilter(e.target.value))
	}
	const clearFilter = () => {
		dispatch(setFilter(''))
	}
	return (
		<div className='navbar bg-base-100'>
			<div className='flex-1'>
				<NavLink to='/' className='btn btn-ghost normal-case text-xl'>
					Home
				</NavLink>
				<NavLink to='/posts' className='btn btn-ghost normal-case text-xl'>
					Posts
				</NavLink>
				<NavLink to='/add' className='btn btn-ghost normal-case text-xl'>
					Add Post
				</NavLink>
			</div>
			<div className='flex-none gap-2'>
				<div className='form-control relative'>
					<input
						value={filter}
						onChange={changeFilter}
						type='text'
						placeholder='Search'
						className='input input-bordered w-24 md:w-auto'
					/>
					{filter && (
						<XCircle
							onClick={clearFilter}
							className='absolute right-2 top-3 text-gray-300 hover:text-black hover:cursor-pointer'
						/>
					)}
				</div>
			</div>
		</div>
	)
}
