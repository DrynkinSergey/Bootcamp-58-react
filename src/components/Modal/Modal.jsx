import React from 'react'
import PropTypes from 'prop-types'
export const Modal = props => {
	return (
		<div>
			<h1>Modal</h1>
			<hr />
			{props.children}
			<hr />
		</div>
	)
}

Modal.propTypes = {
	children: PropTypes.node,
}
