import React from 'react'
import { FlexContainer } from './components/Counter/Counter.styled'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
import { TodoList } from './components/TodoList/TodoList'
import { Test } from './components/Test'

const App = () => {
	return (
		<>
			<FlexContainer>
				<Test />
			</FlexContainer>
		</>
	)
}

export default App
