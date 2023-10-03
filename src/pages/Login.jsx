import React from 'react'
import { useDispatch } from 'react-redux'
import { login, register } from '../redux/user/operations'
import Form from '../components/Form'

const Login = () => {
	const dispatch = useDispatch()
	const loginUser = data => {
		const { email, password } = data
		dispatch(
			login({
				email,
				password,
			})
		)
	}
	return (
		<div>
			<button
				onClick={() =>
					dispatch(
						register({
							name: 'Adrian Cross',
							email: 'across2323@mai.com',
							password: 'across2323@mai.com',
						})
					)
				}
			>
				Register
			</button>
			<Form login={loginUser} />
		</div>
	)
}

export default Login
