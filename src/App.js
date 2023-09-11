import React from 'react'

import RegisterForm from './components/RegisterForm/RegisterForm'
import { StyledFlex } from './styledComponents/StyledFlex'
import { Employee } from './components/Employees/Employee'

const App = () => {
	return (
		<>
			<StyledFlex $center>
				<RegisterForm />
			</StyledFlex>
			<Employee />
		</>
	)
}

export default App
