import React from 'react'
import ReactDOM from 'react-dom/client'

// ;<a href='/' id='MyAnchorTag'>My link with React!</a>
const el = React.createElement('a', { href: '/', id: 'MyAnchorTag' }, 'My link with React!')
const difficultEl = React.createElement(
	'div',
	{ id: 'wrapper' },
	React.createElement('h1', {}, React.createElement('span', null, 'Hello from react!'))
)

const jsxElem = (
	<div id='wrapper'>
		<h1>
			<span>Hello from react!</span>
		</h1>
	</div>
)

// const MyComponent2 = () => (
// 	<div id='wrapper'>
// 		<h1>
// 			<span>Hello from react!</span>
// 		</h1>
// 	</div>
// )

const MyComponent = () => {
	return (
		<div id='wrapper'>
			<h1>
				<span>Hello from react!</span>
			</h1>
		</div>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyComponent />)
// import React from 'react'
// import ReactDOM from 'react-dom/client'

// import App from './App'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>
// )
