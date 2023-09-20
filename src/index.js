import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { GlobalStyles } from './styles/GlobalStyles'
import { darkTheme, theme } from './styles/theme'
import { ThemeProvider } from 'styled-components'
import 'modern-normalize'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './context/AuthProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<ThemeProvider theme={theme}>
		<AuthProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</AuthProvider>
		<ToastContainer autoClose={1000} />
		<GlobalStyles />
	</ThemeProvider>
)
