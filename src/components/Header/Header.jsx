import PropTypes from 'prop-types'
import styles from './Header.module.scss'
export const Header = props => {
	const { title = 'Default', count } = props
	return (
		<header className='header'>
			<h1 className={styles.title}>{title}</h1>
			{count.toFixed(2)}
		</header>
	)
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
	count: PropTypes.number.isRequired,
}
