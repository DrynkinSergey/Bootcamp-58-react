import React, { createContext } from 'react'
import useModal from '../hooks/useModal'

export const MyContext = createContext()

export const ContextProvider = ({ children }) => {
	const { isOpen, close, toggle, open, modalType, modalOptions } = useModal()

	const contextValue = { isOpen, close, toggle, open, modalType, modalOptions }
	return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
}
