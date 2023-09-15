import { Component, useEffect, useRef } from 'react'
import { CloseButton, ModalContent, ModalWrapper } from './Modal.styled'

// class Modal extends Component {
// 	intervalId = null
// 	timeoutId = null
// 	handleKeyDown = e => {
// 		if (e.key === 'Escape') {
// 			this.props.close()
// 		}
// 	}
// 	componentDidMount() {
// 		document.body.style.overflow = 'hidden'
// 		this.intervalId = setInterval(() => {
// 			console.log(new Date().toLocaleTimeString())
// 		}, 1000)

// 		this.timeoutId = setTimeout(() => {
// 			console.log('Hello')
// 		}, 3000)

// 		document.addEventListener('keydown', this.handleKeyDown)
// 	}
// 	componentWillUnmount() {
// 		document.body.style.overflow = 'auto'

// 		document.removeEventListener('keydown', this.handleKeyDown)
// 		clearInterval(this.intervalId)
// 		clearTimeout(this.timeoutId)
// 		console.log('UNMOUNT')
// 	}

// 	onBackDropClick = e => {
// 		if (e.currentTarget === e.target) {
// 			this.props.close()
// 		}
// 	}

// 	render() {
// return (
// 	<ModalWrapper onClick={this.onBackDropClick}>
// 		<ModalContent>
// 			<>
// 				<h1>Modal</h1>
// 				<hr />
// 			</>
// 			<CloseButton onClick={this.props.close}>×</CloseButton>
// 			{this.props.children}
// 		</ModalContent>
// 	</ModalWrapper>
// )
// 	}
// }

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
