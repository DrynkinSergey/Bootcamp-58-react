import React from 'react'
import { Component3 } from './Component3'

export const Component2 = ({ name, auto }) => {
	return (
		<div>
			Component2
			<Component3 name={name} auto={auto} />
		</div>
	)
}
