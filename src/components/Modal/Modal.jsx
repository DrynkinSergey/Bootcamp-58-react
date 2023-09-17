import { useEffect, useRef } from 'react'
import { CloseButton, ModalContent, ModalWrapper } from './Modal.styled'

const Modal = ({ children, close, title }) => {
	const intervalID = useRef(null)

	useEffect(() => {
		const handleKeyDown = e => {
			if (e.key === 'Escape') {
				console.log('Escape')
				close()
			}
		}
		document.addEventListener('keydown', handleKeyDown)
		document.body.style.overflow = 'hidden'
		intervalID.current = setInterval(() => {
			console.log(new Date().toLocaleTimeString())
		}, 1000)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
			clearInterval(intervalID.current)
			document.body.style.overflow = 'auto'
			console.log('Не закривай мене')
		}
	}, [close])
	const onBackDropClick = e => {
		if (e.currentTarget === e.target) {
			close()
		}
	}
	return (
		<ModalWrapper onClick={onBackDropClick}>
			<ModalContent>
				<>
					<h1>Modal</h1>
					<hr />
				</>
				<CloseButton onClick={close}>×</CloseButton>
				{children}
			</ModalContent>
		</ModalWrapper>
	)
}

export default Modal
