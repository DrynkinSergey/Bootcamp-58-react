import React, { useState } from 'react'

const useModal = () => {
	const modalOptions = {
		editTask: 'Edit Task',
		addTask: 'New Task',
		editTable: 'Edit Table',
		newTable: 'New Table',
	}
	const [isOpen, setIsOpen] = useState(false)
	const [modalType, setModalType] = useState('')
	const close = () => {
		setIsOpen(false)
		setModalType('')
	}
	const toggle = () => setIsOpen(prev => !prev)
	const open = modalType => {
		setIsOpen(true)
		setModalType(modalType)
	}
	return { isOpen, close, open, toggle, modalType, modalOptions }
}

export default useModal
