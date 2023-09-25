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
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<ThemeProvider theme={theme}>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
		<ToastContainer autoClose={1000} />
		<GlobalStyles />
	</ThemeProvider>
)
