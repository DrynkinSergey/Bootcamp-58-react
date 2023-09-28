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
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<ThemeProvider theme={theme}>
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</Provider>
		<ToastContainer autoClose={1000} />
		<GlobalStyles />
	</ThemeProvider>
)
