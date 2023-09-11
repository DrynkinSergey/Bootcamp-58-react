import React from 'react'

import Login from './components/Login/Login'
import { StyledFlex } from './styledComponents/StyledFlex'
import LoginFormik from './components/Login/LoginFormik'
import LoginHookForm from './components/Login/LoginHookForm'

const App = () => {
	return (
		<>
			<StyledFlex $center>
				<LoginHookForm />
				<LoginFormik />
			</StyledFlex>
		</>
	)
}

export default App
