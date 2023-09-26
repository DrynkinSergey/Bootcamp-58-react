import React from 'react'
import { Header } from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Posts from './pages/Posts'
import AddPost from './pages/AddPost'
import EditPage from './pages/EditPage'

const App = () => {
	return (
		<div className=''>
			<Header />
			<div className=''>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/posts' element={<Posts />} />
					<Route path='/add' element={<AddPost />} />
					<Route path='/edit/:id' element={<EditPage />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
