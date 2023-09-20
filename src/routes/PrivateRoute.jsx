import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
	const location = useLocation()
	const { isLoggedIn } = useAuth()
	if (isLoggedIn) {
		return children
	}
	return <Navigate state={{ from: location }} to='/login' />
}

export default PrivateRoute
