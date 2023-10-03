import { XCircle } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
import { animateModal } from '../../animations/Animations'
import ReactDOM from 'react-dom'
const modalRoot = document.querySelector('#modalRoot')
export const Modal = ({ children, title = 'Title', close, portal }) => {
	return ReactDOM.createPortal(
		<motion.div
			variants={animateModal}
			exit='exit'
			className='inset-0 fixed flex justify-center items-center bg-black/30'
		>
			<motion.div whileInView='visible' initial='hidden' variants={animateModal} className='py-10 px-10 bg-white'>
				<div className='flex justify-between px-5 py-2 border-b-2 border-black'>
					<h2 className='text-xl'>{title}</h2>
					<button onClick={close} className='hover:text-red-500'>
						<XCircle />
					</button>
				</div>
				<div>{children}</div>
			</motion.div>
		</motion.div>,
		modalRoot
	)
}
