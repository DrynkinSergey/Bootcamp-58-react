import React from 'react'
import styles from './Section.module.scss'
import PropTypes from 'prop-types'
import { StyledItem, StyledTitleSection, StyledWrapper, TestBox } from './Section.styled'
import { Flex } from '../../styles/GlobalStyles'
import { styled } from 'styled-components'

export const Section = ({ title = 'Default value', data = [] }) => {
	return (
		<section>
			<StyledTitleSection $color='green'>{title}</StyledTitleSection>

			<Flex $direction='column' $gap='10px'>
				{data.map((item, idx) => (
					<StyledItem $idx={idx} key={item.id}>
						{item.title}
					</StyledItem>
				))}
			</Flex>
			<Flex $direction='column' $gap='20px'>
				<Box />
				<RedBox />
				<BigBlueBox />
			</Flex>
		</section>
	)
}

const Box = styled.div`
	box-shadow: ${({ theme }) => theme.shadows.xl};
	width: 150px;
	height: 150px;
	background-color: black;
`
const RedBox = styled(Box)`
	background-color: red;
`
const BigBlueBox = styled(Box)`
	width: 400px;
	height: 400px;
	background-color: blue;
	transition: all 0.3s ease;

	@media (max-width: ${props => props.theme.media.tablet}) {
		background-color: green;
		width: 200px;
		height: 200px;
	}
`

Section.propTypes = {
	title: PropTypes.string,
	data: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			title: PropTypes.string,
		})
	),
}
