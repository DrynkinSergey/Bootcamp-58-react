import { Header } from './components/Header'

function App() {
	const message = 'Test Hello!!'
	const online = false

	return (
		<div className='App'>
			<Header />
			<h1>Hello</h1>
			<ul>
				<li>{message}</li>
				<li>{2 + 2}</li>
				<li>{message.split(' ')[0]}</li>
				<li>{online ? 'Online' : 'Offline'}</li>
			</ul>
		</div>
	)
}

export default App
