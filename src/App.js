import React from 'react'
import { Header } from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Posts from './pages/Posts'
import AddPost from './pages/AddPost'

const App = () => {
	return (
		<div className=''>
			<Header />
			<div className=' px-4'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/posts' element={<Posts />} />
					<Route path='/add' element={<AddPost />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
