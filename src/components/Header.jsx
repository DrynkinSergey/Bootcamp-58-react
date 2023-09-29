import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { selectIsLoggedIn, selectUser } from '../redux/auth/selectors'
import { logoutThunk } from '../redux/auth/operations'

export const Header = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn)
	const { name } = useSelector(selectUser)
	const dispatch = useDispatch()
	const handleLogout = () => {
		dispatch(logoutThunk())
	}
	return (
		<header className='flex justify-between  gap-4 py-4 bg-teal-500 font-bold text-white px-10 text-xl'>
			<nav className='flex  w-full gap-4 justify-between'>
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
				</ul>
				{!isLoggedIn && (
					<ul className='flex gap-4'>
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
				)}
			</nav>
			{isLoggedIn && (
				<>
					<h2>{name}</h2>|
					<button onClick={handleLogout} className='hover:text-red-500'>
						Logout
					</button>
				</>
			)}
		</header>
	)
}
