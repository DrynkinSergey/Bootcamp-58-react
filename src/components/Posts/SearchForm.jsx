import React, { Component, useEffect, useRef, useState } from 'react'

const SearchForm = ({ onChangeQuery }) => {
	// state = {
	// 	query: '',
	// }
	const [query, setQuery] = useState()
	const myRef = useRef(null)
	const handleChange = e => {
		// this.setState({ query: e.target.value })
		setQuery(e.target.value)
	}
	const handleSubmit = e => {
		e.preventDefault()
		// this.props.onChangeQuery(this.state.query)
		onChangeQuery(query)
		// this.setState({ query: '' })
		setQuery('')
		myRef.current.focus()
	}
	useEffect(() => {
		myRef.current.focus()
	}, [])
	return (
		<form onSubmit={handleSubmit}>
			<input ref={myRef} type='text' value={query} onChange={handleChange} />
			<button>Search</button>
		</form>
	)
}
export default SearchForm
