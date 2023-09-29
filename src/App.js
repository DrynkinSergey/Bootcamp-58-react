import { Route, Routes } from 'react-router-dom'
import { Home, Login, NotFound, Register, Todos } from './pages'
import { Header } from './components/Header'
import { PrivateRoute } from './components/Routes/PrivateRoute'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { refreshThunk } from './redux/auth/operations'
import { selectIsRefresh } from './redux/auth/selectors'
import { Triangle } from 'react-loader-spinner'
import { Spinner } from './components/Spinner'

const App = () => {
	const dispatch = useDispatch()
	const isRefresh = useSelector(selectIsRefresh)
	useEffect(() => {
		dispatch(refreshThunk())
	}, [dispatch])
	return isRefresh ? (
		<Spinner />
	) : (
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
