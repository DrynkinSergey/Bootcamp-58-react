import React from 'react'
import { Trello } from './components/Trello/Trello'
import { Route, Routes } from 'react-router'
import { NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import { TrelloPage } from './pages/TrelloPage'
import Login from './pages/Login'

const App = () => {
	return (
		<div>
			<header className='bg-teal-500'>
				<nav className='py-2 px-5 flex gap-4 text-white text-xl font-bold'>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='/about'>About</NavLink>
					<NavLink to='/trello'>Trello</NavLink>
					<NavLink to='/login'>Login</NavLink>
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
