import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyles } from './styles/GlobalStyles'
import { darkTheme, theme } from './styles/theme'
import { ThemeProvider } from 'styled-components'
import 'modern-normalize'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<ThemeProvider theme={theme}>
		<App />
		<GlobalStyles />
	</ThemeProvider>
)
