import React, { useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import { TrelloPage } from './pages/TrelloPage'
import Login from './pages/Login'
import { useDispatch, useSelector } from 'react-redux'
import { refresh } from './redux/user/operations'
import Header from './components/Header'
import { selectIsLoggedIn, selectUser } from './redux/user/selectors'

const App = () => {
	const dispatch = useDispatch()
	const isLoggedIn = useSelector(selectIsLoggedIn)
	useEffect(() => {
		dispatch(refresh())
	}, [dispatch])
	return (
		<div>
			{true ? (
				<>
					<Header />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/trello' element={<TrelloPage />} />
						<Route path='*' element={<h1>Not found</h1>} />
					</Routes>{' '}
				</>
			) : (
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Login />} />
					<Route path='*' element={<Navigate to='/login' />} />
				</Routes>
			)}
		</div>
	)
}

export default App
