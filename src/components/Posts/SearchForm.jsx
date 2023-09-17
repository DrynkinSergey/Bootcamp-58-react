import React, { Component, useEffect, useRef, useState } from 'react'

const SearchForm = ({ onChangeQuery }) => {
	const [query, setQuery] = useState()
	const myRef = useRef(null)
	const handleChange = e => {
		setQuery(e.target.value)
	}
	const handleSubmit = e => {
		e.preventDefault()
		onChangeQuery(query)
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
