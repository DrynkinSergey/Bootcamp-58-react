import React, { useContext } from 'react'
import Posts from './components/Posts/Posts'
import { Counter } from './components/Counter/Counter'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
import Login from './components/Login/Login'
import { Employee } from './components/Employees/Employee'
import { TodoList } from './components/TodoList/TodoList'
import { Component1 } from './components/Component1'
import { MyContext } from './context/ContextProvider'
import { StyledFlex } from './styledComponents/StyledFlex'
import { ThemeContext } from './context/ThemeContext'

const App = () => {
	const { user, isLoggedIn, logout, todos } = useContext(MyContext)
	const { theme, changeTheme } = useContext(ThemeContext)

	// console.log(todos)
	if (!isLoggedIn) {
		return (
			<StyledFlex $center>
				<Login />
			</StyledFlex>
		)
	}
	return (
		<div style={{ background: theme === 'dark' ? 'gray' : 'white' }}>
			{/* <h1>{user.name}</h1>
			<h1>{user.email}</h1>
			<button onClick={changeTheme}>SWITCH THEME</button>
			<button onClick={logout}>LOGOUT</button> */}
			{/* <Posts /> */}
			<TodoList />
			{/* <Employee /> */}
			{/* <Counter /> */}
			{/* <Component1 name='Oleg' auto='Cherry QQ' /> */}
			{/* <ColorPicker /> */}
		</div>
	)
}

export default App
