import React, { useEffect } from 'react'
import { Trello } from './components/Trello/Trello'
import { Route, Routes } from 'react-router'
import { NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import { TrelloPage } from './pages/TrelloPage'
import Login from './pages/Login'
import { useDispatch } from 'react-redux'
import { login, logout, refresh, register } from './redux/user/operations'

const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(refresh())
	}, [dispatch])
	return (
		<div>
			<header className='bg-teal-500'>
				<nav className='py-2 px-5 flex justify-between gap-4 text-white text-xl font-bold'>
					<div className='flex  gap-4'>
						<NavLink to='/'>Home</NavLink>
						<NavLink to='/about'>About</NavLink>
						<NavLink to='/trello'>Trello</NavLink>
					</div>
					{/* <NavLink to='/login'>Login</NavLink> */}
					<div className='flex  gap-4'>
						<button
							onClick={() =>
								dispatch(
									login({
										email: 'across2323@mai.com',
										password: 'across2323@mai.com',
									})
								)
							}
						>
							Login
						</button>
						<button
							onClick={() =>
								dispatch(
									register({
										name: 'Adrian Cross',
										email: 'across2323@mai.com',
										password: 'across2323@mai.com',
									})
								)
							}
						>
							Register
						</button>
						<button onClick={() => dispatch(logout())}>Logout</button>
					</div>
				</nav>
			</header>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/trello' element={<TrelloPage />} />
				<Route path='/login' element={<Login />} />
				<Route path='*' element={<h1>Not found</h1>} />
			</Routes>
		</div>
	)
}

export default App
