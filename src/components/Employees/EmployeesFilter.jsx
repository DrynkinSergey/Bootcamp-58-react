import React from 'react'
import styled from 'styled-components'
import { Flex } from '../../styles/GlobalStyles'

const skilsList = ['all', 'react', 'angular', 'vue']

export const EmployeesFilter = () => {
	return (
		<Filters>
			<h2>Filters</h2>
			<Flex $height='100px' $items='center'>
				<input type='text' />
				<label htmlFor='isAvailable'>
					<input type='checkbox' id='isAvailable' />
					<span> isAvailable</span>
				</label>
			</Flex>
			<Flex $height='100px' $items='center'>
				{skilsList.map(radioButtonName => (
					<label key={radioButtonName}>
						<input name='radioButtonName' type='radio' value={radioButtonName} />
						<span> {radioButtonName}</span>
					</label>
				))}
			</Flex>
		</Filters>
	)
}
const Filters = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	background-color: #cbd3ff;
	font-weight: bold;
	font-size: 1.5rem;
	padding: 10px 0;
	margin-bottom: 20px;
`
