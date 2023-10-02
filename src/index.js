import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { ContextProvider } from './context/ContextProvider'
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<>
		<BrowserRouter>
			<ContextProvider>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<App />
					</PersistGate>
				</Provider>
			</ContextProvider>
		</BrowserRouter>
		<ToastContainer autoClose={1000} />
	</>
)
