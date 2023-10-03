import React from 'react'
import { login, logout, register } from '../redux/user/operations'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsLoggedIn, selectUser } from '../redux/user/selectors'

const Header = () => {
	const dispatch = useDispatch()
	const { name } = useSelector(selectUser)
	return (
		<header className='bg-teal-500'>
			<nav className='py-2 px-5 flex justify-between gap-4 text-white text-xl font-bold'>
				<div className='flex  gap-4'>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='/about'>About</NavLink>
					<NavLink to='/trello'>Trello</NavLink>
				</div>
				{/* <NavLink to='/login'>Login</NavLink> */}
				<div className='flex  gap-4'>
					<h2>{name}</h2> |<button onClick={() => dispatch(logout())}>Logout</button>
				</div>
			</nav>
		</header>
	)
}

export default Header
