import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
	return (
		<header className='flex justify-between  gap-4 py-4 bg-teal-500 font-bold text-white px-10 text-xl'>
			<nav>
				<ul className='flex gap-4'>
					<li>
						<NavLink className='hover:text-red-500' to='/'>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink className='hover:text-red-500' to='/todos'>
							Todos
						</NavLink>
					</li>
					<li>
						<NavLink className='hover:text-red-500' to='/login'>
							Login
						</NavLink>
					</li>
					<li>
						<NavLink className='hover:text-red-500' to='/register'>
							Register
						</NavLink>
					</li>
				</ul>
			</nav>
			<h2>testMail@google.com.ua</h2>
			<button className='hover:text-red-500'>Logout</button>
		</header>
	)
}
