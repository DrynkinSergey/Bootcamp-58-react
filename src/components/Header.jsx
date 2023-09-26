import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
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
				<div className='form-control'>
					<input type='text' placeholder='Search' className='input input-bordered w-24 md:w-auto' />
				</div>
				<div className='dropdown dropdown-end'>
					<label tabIndex={0} className='btn btn-ghost btn-circle avatar'></label>
					<ul tabIndex={0} className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'>
						<li>
							<a className='justify-between'>
								Profile
								<span className='badge'>New</span>
							</a>
						</li>
						<li>
							<a>Settings</a>
						</li>
						<li>
							<a>Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
