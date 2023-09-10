import React from 'react'
import { FlexContainer } from './components/Counter/Counter.styled'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
import { TodoList } from './components/TodoList/TodoList'
import RegisterForm from './components/RegisterForm/RegisterForm'
import { StyledFlex } from './styledComponents/StyledFlex'

const App = () => {
	return (
		<>
			<StyledFlex $center>
				<RegisterForm />
			</StyledFlex>
		</>
	)
}

export default App
