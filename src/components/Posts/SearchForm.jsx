import React, { Component } from 'react'

export default class SearchForm extends Component {
	state = {
		query: '',
	}
	handleChange = e => {
		this.setState({ query: e.target.value })
	}
	handleSubmit = e => {
		e.preventDefault()
		this.props.onChangeQuery(this.state.query)
		this.setState({ query: '' })
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type='text' value={this.state.query} onChange={this.handleChange} />
				<button>Search</button>
			</form>
		)
	}
}
