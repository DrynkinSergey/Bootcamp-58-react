import axios from 'axios'
import React, { useEffect, useState } from 'react'

// 1. Створення контексту
export const MyContext = React.createContext()

// 2. Створення функції обгортки
const ContextProvider = ({ children }) => {
	// 5. Контекст може мати власні хуки, такі як useState та інші
	const [userName, setUserName] = useState('')
	const [todos, setTodos] = useState([])
	const [email, setEmail] = useState('')

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/todos').then(res => setTodos(res.data))
	}, [])
	// 6. Контекст може мати власні функції
	const login = ({ name, email }) => {
		setUserName(name)
		setEmail(email)
	}
	const logout = () => {
		setUserName('')
	}

	// 4. Створення тих самих данних, котрі будемо передавати
	const valueForContext = {
		todos,
		user: {
			name: userName,
			email: email,
		},
		login,
		logout,
		isLoggedIn: Boolean(userName),
	}
	// 3. Повертаємо наш контекст як обгортку, та передаємо велью - ті дання котрі будуть доступні компонентам
	return <MyContext.Provider value={valueForContext}>{children}</MyContext.Provider>
}

export default ContextProvider
