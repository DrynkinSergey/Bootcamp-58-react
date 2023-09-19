import { Link, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import Homepage from './pages/Homepage.jsx'
import About from './pages/About.jsx'

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Homepage />} />
					<Route path='about' element={<About />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
