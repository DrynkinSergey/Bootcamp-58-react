import React from 'react'
import { useToggle } from '../hooks/useToggle'
import Modal from '../components/Modal/Modal'

const Homepage = () => {
	const { isOpen, close, open } = useToggle()
	return (
		<div>
			Homepage
			<button onClick={open}>OPEN MODAL</button>
			{isOpen ? <Modal close={close}>HELLO REACT</Modal> : null}
		</div>
	)
}

export default Homepage
