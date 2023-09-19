import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import Homepage from './pages/Homepage.jsx'
import About from './pages/About.jsx'
import PageNotFound from './pages/PageNotFound'
import Users from './pages/Users'
import SingleUser from './pages/SingleUser'

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Homepage />} />
					<Route path='about' element={<About />} />
					<Route path='users' element={<Users />} />
					<Route path='users/:id' element={<SingleUser />} />
					<Route path='test' element={<Navigate to='/' />} />
				</Route>
				<Route path='*' element={<PageNotFound />} />
			</Routes>
		</>
	)
}

export default App
