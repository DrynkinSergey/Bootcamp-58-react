import PropTypes from 'prop-types'

export const Header = props => {
	const { title = 'Default', count } = props
	return (
		<header>
			<h1>{title}</h1>
			{count.toFixed(2)}
		</header>
	)
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
	count: PropTypes.number.isRequired,
}
