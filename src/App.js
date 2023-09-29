import { Route, Routes } from 'react-router-dom'
import { Home, Login, NotFound, Register, Todos } from './pages'
import { Header } from './components/Header'
import { PrivateRoute } from './components/Routes/PrivateRoute'

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route
					path='/todos'
					element={
						<PrivateRoute>
							<Todos />
						</PrivateRoute>
					}
				/>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	)
}

export default App
