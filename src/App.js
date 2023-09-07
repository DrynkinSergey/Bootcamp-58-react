import { nanoid } from 'nanoid'
import { Button } from './components/Button'
import { Header } from './components/Header/Header'
import { Section } from './components/Section/Section'
import { Modal } from './components/Modal/Modal'
import { Flex } from './styles/GlobalStyles'
import { styled } from 'styled-components'

function App() {
	const movies = [
		{ id: 1, title: 'Step up' },
		{ id: 2, title: 'Taxi' },
		{ id: 3, title: 'GOT' },
		{ id: 4, title: 'Batman' },
		{ id: 5, title: 'Spiderman' },
	]
	const goodsData = [
		{ id: 1, title: 'Phone' },
		{ id: 2, title: 'Carrots' },
		{ id: 3, title: 'Potato' },
		{ id: 4, title: 'Cherry' },
		{ id: 5, title: 'Tablet' },
	]
	const btns = ['Login', 'Submit', 'Click me!']
	const isOnline = false
	return (
		<div className='App'>
			<Header title='React' count={21.2332} />
			<hr />
			<h1 className='title'>{isOnline ? 'Hello my friend' : 'Lets login!'}</h1>
			{isOnline && <h1>Online</h1>}
			<h2 className='title'>
				<span>EXAMPLE</span>
			</h2>
			<h1>{isOnline && 'Online'}</h1>
			<h1>{!isOnline && 'Offline'}</h1>

			<Flex $direction='column' $items='center' $justify='center' $mh='100vh'>
				<Title>React is AWESOME</Title>
			</Flex>

			<Flex $direction='column' $items='center' $justify='center' $mh='100vh'>
				<Flex>
					<Button $bg='blue' $color='white'>
						Login
					</Button>
					<Button $bg='tomato'>Logout</Button>
					<Button $bg='teal' $color='yellow'>
						Click me!
					</Button>
				</Flex>
			</Flex>

			<Section title='Movies' data={movies} />
			<Section title='Goods' data={goodsData} />

			<Modal>
				<Button>Hello from modal</Button>
				<h1>React</h1>
			</Modal>

			<Modal>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil in maiores ut, quam asperiores aliquam ducimus
				nulla voluptatibus ipsum cumque porro rerum molestias earum voluptatum illum quibusdam cum sit culpa?
			</Modal>
		</div>
	)
}

export default App

const Title = styled.h1`
	font-size: calc((1vh + 1vw) * 3.2);
	border: 10px solid black;
	padding: 20px;
`
