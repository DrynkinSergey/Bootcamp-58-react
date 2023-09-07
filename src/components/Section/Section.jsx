import React from 'react'
import styles from './Section.module.scss'
import PropTypes from 'prop-types'
export const Section = ({ title = 'Default value', data = [] }) => {
	return (
		<section>
			<h1>{title}</h1>
			<ul className={styles.wrapper}>
				{data.map((item, idx) => (
					<li style={{ backgroundColor: idx % 2 === 0 ? 'teal' : 'tomato' }} className={styles.item} key={item.id}>
						{item.title}
					</li>
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
