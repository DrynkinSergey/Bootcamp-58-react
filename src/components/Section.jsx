import React from 'react'
import PropTypes, { number } from 'prop-types'
export const Section = ({ title = 'Default value', data = [] }) => {
	return (
		<section>
			<h1>{title}</h1>
			<ul>
				{data.map(item => (
					<li key={item.id}>{item.title}</li>
				))}
			</ul>
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
