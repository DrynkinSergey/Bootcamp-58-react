import { nanoid } from 'nanoid'
import { Button } from './components/Button'
import { Header } from './components/Header'
import { Section } from './components/Section'
import { Modal } from './components/Modal/Modal'

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
			<h1>{isOnline ? 'Hello my friend' : 'Lets login!'}</h1>
			{isOnline && <h1>Online</h1>}

			<h1>{isOnline && 'Online'}</h1>
			<h1>{!isOnline && 'Offline'}</h1>

			{btns.map(btn => (
				<Button key={nanoid()} titleForMyBtn={btn}>
					Hello
				</Button>
			))}

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

			<Modal>
				<img
					src='https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1279225/regular_1708x683_0521-react-redux-and-immutablejs-Waldek_Newsletter-993b50f4ae56e9ee6e024a309c23a6c4.png'
					alt='react'
				/>
			</Modal>
		</div>
	)
}

export default App
