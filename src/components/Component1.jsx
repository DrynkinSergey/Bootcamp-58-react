import React from 'react'
import { Component2 } from './Component2'

export const Component1 = ({ name, auto }) => {
	return (
		<div>
			Component1
			<Component2 name={name} auto={auto} />
		</div>
	)
}
