import { Component } from 'react'
import { CloseButton, ModalContent, ModalWrapper } from './Modal.styled'

class Modal extends Component {
	intervalId = null
	timeoutId = null
	handleKeyDown = e => {
		if (e.key === 'Escape') {
			this.props.close()
		}
	}
	componentDidMount() {
		document.body.style.overflow = 'hidden'
		this.intervalId = setInterval(() => {
			console.log(new Date().toLocaleTimeString())
		}, 1000)

		this.timeoutId = setTimeout(() => {
			console.log('Hello')
		}, 3000)

		document.addEventListener('keydown', this.handleKeyDown)
	}
	componentWillUnmount() {
		document.body.style.overflow = 'auto'

		document.removeEventListener('keydown', this.handleKeyDown)
		clearInterval(this.intervalId)
		clearTimeout(this.timeoutId)
		console.log('UNMOUNT')
	}

	onBackDropClick = e => {
		if (e.currentTarget === e.target) {
			this.props.close()
		}
	}

	render() {
		return (
			<ModalWrapper onClick={this.onBackDropClick}>
				<ModalContent>
					<>
						<h1>Modal</h1>
						<hr />
					</>
					<CloseButton onClick={this.props.close}>×</CloseButton>
					{this.props.children}
				</ModalContent>
			</ModalWrapper>
		)
	}
}

export default Modal
