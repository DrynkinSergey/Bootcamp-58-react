import { NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useAuth } from '../hooks/useAuth'

export const NavBar = () => {
	const { isLoggedIn, logout, user } = useAuth()
	const navigate = useNavigate()
	const navArr = [
		{
			src: '/',
			title: 'Home',
		},
		{
			src: '/about',
			title: 'About',
		},
		{
			src: '/users',
			title: 'Users',
		},

		{
			src: '/posts',
			title: 'Posts',
		},
	]
	return (
		<SideBar>
			{user && <h1>{user}</h1>}
			{navArr.map(({ src, title }) => (
				<StyledLink key={src} to={src}>
					{title}
				</StyledLink>
			))}
			{isLoggedIn && <StyledLink to='/colorPicker'>Color Picker</StyledLink>}
			{isLoggedIn ? <button onClick={logout}>Exit</button> : <button onClick={() => navigate('/login')}>Login</button>}
		</SideBar>
	)
}

const SideBar = styled.nav`
	background-color: #d5edfd;
	min-height: 100vh;
	border-right: 2px solid black;
	display: flex;
	flex-direction: column;
	gap: 25px;
	position: fixed;
	width: 200px;
	padding: 40px 20px;
`
export const StyledLink = styled(NavLink)`
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 5px;
	border-radius: 4px;
	text-decoration: none;
	color: black;

	&.active {
		background-color: blue;
		color: white;
	}
	&:hover:not(.active) {
		background-color: lightblue;
	}
`
