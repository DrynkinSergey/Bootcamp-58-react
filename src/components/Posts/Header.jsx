import React from 'react'
import SearchForm from './SearchForm'

export const Header = ({ onChangeQuery }) => {
	return (
		<header>
			<h2>GoIT Posts Search</h2>
			<SearchForm onChangeQuery={onChangeQuery} />
		</header>
	)
}
