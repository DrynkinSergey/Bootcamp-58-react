import React, { createContext } from 'react'
import useModal from '../hooks/useModal'

export const MyContext = createContext()

export const ContextProvider = ({ children }) => {
	const { isOpen, close, toggle, open } = useModal()
	const contextValue = { isOpen, close, toggle, open }
	return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
}
