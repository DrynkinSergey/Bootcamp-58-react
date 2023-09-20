import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState('')

	const login = name => {
		setUser(name)
	}
	const logout = () => {
		setUser('')
	}

	const isLoggedIn = Boolean(user)

	const value = {
		login,
		logout,
		isLoggedIn,
		user,
	}
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
