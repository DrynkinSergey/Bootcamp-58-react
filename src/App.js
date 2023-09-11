import React from 'react'

import RegisterForm from './components/RegisterForm/RegisterForm'
import { StyledFlex } from './styledComponents/StyledFlex'
import { Employee } from './components/Employees/Employee'
import Login from './components/Login/Login'

const App = () => {
	return (
		<>
			<StyledFlex $center>
				<Login />
			</StyledFlex>
			<Employee />
		</>
	)
}

export default App
