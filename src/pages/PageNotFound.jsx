import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const PageNotFound = () => {
	return (
		<Wrapper>
			<div>
				<h1>PageNotFound</h1>
				<p>
					You can go to <Link to='/'>Home</Link>
				</p>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: grid;
	min-height: 100vh;
	place-content: center;
`

export default PageNotFound
