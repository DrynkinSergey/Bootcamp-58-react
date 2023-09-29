import { Route, Routes } from 'react-router-dom'
import { Home, Login, NotFound, Register, Todos } from './pages'

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/todos' element={<Todos />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	)
}

export default App
