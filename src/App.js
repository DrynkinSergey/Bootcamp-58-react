import { Header } from './components/Header'
import { Section } from './components/Section'

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
	return (
		<div className='App'>
			<Header />
			<hr />
			<Section title='Movies' data={movies} />
			<Section title='Goods' data={goodsData} />
		</div>
	)
}

export default App
