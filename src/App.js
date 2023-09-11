import React from 'react'

import Login from './components/Login/Login'
import { StyledFlex } from './styledComponents/StyledFlex'
import LoginFormik from './components/Login/LoginFormik'

const App = () => {
	return (
		<StyledFlex $center>
			<LoginFormik />
		</StyledFlex>
	)
}

export default App
