import React, { useState } from 'react'

export const MyContext = React.createContext()

const ContextProvider = ({ children }) => {
	const [userName, setUserName] = useState('')
	const [email, setEmail] = useState('')
	const login = ({ name, email }) => {
		setUserName(name)
		setEmail(email)
	}
	const logout = () => {
		setUserName('')
	}

	const valueForContext = {
		user: {
			name: userName,
			email: email,
		},
		login,
		logout,
		isLoggedIn: Boolean(userName),
	}
	return <MyContext.Provider value={valueForContext}>{children}</MyContext.Provider>
}

export default ContextProvider
