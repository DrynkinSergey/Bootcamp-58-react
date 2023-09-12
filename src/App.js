import React from 'react'

import { StyledFlex } from './styledComponents/StyledFlex'
import { Counter } from './components/Counter/Counter'
const App = () => {
	return (
		<>
			<StyledFlex $center>
				<Counter />
			</StyledFlex>
		</>
	)
}

export default App
