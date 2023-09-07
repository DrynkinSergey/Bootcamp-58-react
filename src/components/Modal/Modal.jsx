import React from 'react'

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
