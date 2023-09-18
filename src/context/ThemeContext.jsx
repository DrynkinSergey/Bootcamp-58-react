import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()
const ThemeProviderContext = ({ children }) => {
	const [theme, setTheme] = useState('dark')
	const changeTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}
	const value = {
		theme,
		changeTheme,
	}
	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeProviderContext
