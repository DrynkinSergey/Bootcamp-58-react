import React from 'react'
import styles from './Section.module.scss'
import PropTypes from 'prop-types'
import { StyledItem, StyledTitleSection, StyledWrapper, TestBox } from './Section.styled'

export const Section = ({ title = 'Default value', data = [] }) => {
	return (
		<section>
			<StyledTitleSection $color='green'>{title}</StyledTitleSection>
			<StyledWrapper>
				{data.map((item, idx) => (
					<StyledItem $idx={idx} key={item.id}>
						{item.title}
					</StyledItem>
				))}
			</StyledWrapper>
			<TestBox $bg='teal' />
		</section>
	)
}

Section.propTypes = {
	title: PropTypes.string,
	data: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			title: PropTypes.string,
		})
	),
}
