import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import Homepage from './pages/Homepage.jsx'
import About from './pages/About.jsx'
import PageNotFound from './pages/PageNotFound'
import Users from './pages/Users'
import SingleUser from './pages/SingleUser'
import UserPosts from './components/UserPosts'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
import Posts from './pages/Posts'
import SinglePost from './pages/SinglePost'
import Comments from './components/Comments'
import { useAuth } from './hooks/useAuth'
import Login from './components/Login/Login'

const App = () => {
	const { isLoggedIn } = useAuth()
	return isLoggedIn ? (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Homepage />} />
				<Route path='about' element={<About />} />
				<Route path='users' element={<Users />} />
				<Route path='posts' element={<Posts />} />
				<Route path='posts/:postId' element={<SinglePost />}>
					<Route path='comments' element={<Comments />} />
				</Route>
				<Route path='colorPicker' element={<ColorPicker />} />

				<Route path='users/:id' element={<SingleUser />}>
					<Route path='address' element={<h2>User address</h2>} />
					<Route path='posts' element={<UserPosts />} />
				</Route>

				<Route path='teams' element={<Navigate to='/users' />} />
			</Route>
			<Route path='*' element={<PageNotFound />} />
		</Routes>
	) : (
		<Routes>
			<Route path='/' element={<Login />} />
			<Route path='*' element={<Navigate to='/' />} />
		</Routes>
	)
}

export default App
