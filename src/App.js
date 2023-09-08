import React from 'react'
import { FlexContainer } from './components/Counter/Counter.styled'
import { ColorPicker } from './components/ColorPicker/ColorPicker'

const App = () => {
	return (
		<>
			<FlexContainer>
				<ColorPicker />
			</FlexContainer>
		</>
	)
}

export default App
