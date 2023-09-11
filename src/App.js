import React from 'react'

import RegisterForm from './components/RegisterForm/RegisterForm'
import { StyledFlex } from './styledComponents/StyledFlex'
import { Employee } from './components/Employees/Employee'
import Login from './components/Login/Login'

const App = () => {
	const handleLogin = data => {
		console.log('Form is submitting!....')
		setTimeout(() => {
			console.log('Data is ready to login')
		}, 1000)
		setTimeout(() => {
			console.log(data)
		}, 3000)
	}
	return (
		<>
			<StyledFlex $center>
				<RegisterForm login={handleLogin} />
			</StyledFlex>
			<Employee />
		</>
	)
}

export default App
