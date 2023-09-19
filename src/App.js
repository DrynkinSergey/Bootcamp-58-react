import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import Homepage from './pages/Homepage.jsx'
import About from './pages/About.jsx'
import PageNotFound from './pages/PageNotFound'
import Users from './pages/Users'
import SingleUser from './pages/SingleUser'
import UserPosts from './components/UserPosts'
import { ColorPicker } from './components/ColorPicker/ColorPicker'

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Homepage />} />
					<Route path='about' element={<About />} />
					<Route path='users' element={<Users />} />
					<Route path='colorPicker' element={<ColorPicker />} />

					{/* users/11 */}
					{/* users/11/address */}
					{/* users/11/posts */}
					<Route path='users/:id' element={<SingleUser />}>
						<Route path='address' element={<h2>User address</h2>} />
						<Route path='posts' element={<UserPosts />} />
					</Route>

					<Route path='teams' element={<Navigate to='/users' />} />
				</Route>
				<Route path='*' element={<PageNotFound />} />
			</Routes>
		</>
	)
}

export default App
