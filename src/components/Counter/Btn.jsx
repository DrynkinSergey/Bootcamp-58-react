import React, { Component } from 'react'

export default class Btn extends Component {
	componentDidUpdate(prevProps) {
		console.log(prevProps.counter)
		if (prevProps.counter === 3) {
			console.log('Btn message')
		}
	}
	componentWillUnmount() {
		console.log('UNMOUNT')
	}
	render() {
		return <button>{this.props.counter}</button>
	}
}
