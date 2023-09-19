import React from 'react'
import { useToggle } from '../hooks/useToggle'
import Modal from '../components/Modal/Modal'
import Login from '../components/Login/Login'

const About = () => {
	const { isOpen, open, close } = useToggle()
	const { isOpen: two, toggle } = useToggle()
	return (
		<div>
			About
			<button onClick={open}>OPEN MODAL</button>
			<button onClick={toggle}>OPEN MODAL 2</button>
			{isOpen ? <Modal close={close}>HELLO REACT</Modal> : null}
			{two ? (
				<Modal close={toggle}>
					<Login />
				</Modal>
			) : null}
		</div>
	)
}

export default About
