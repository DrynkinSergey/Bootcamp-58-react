import React from 'react'
import Posts from './components/Posts/Posts'
import { Counter } from './components/Counter/Counter'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
import Login from './components/Login/Login'
import { Employee } from './components/Employees/Employee'
import { TodoList } from './components/TodoList/TodoList'

const App = () => {
	return (
		<>
			<TodoList />
			{/* <Employee /> */}
			{/* <Counter /> */}
			{/* <ColorPicker /> */}
		</>
	)
}

export default App
