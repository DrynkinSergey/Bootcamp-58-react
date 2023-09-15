import { StyledBackgroundTheme, StyledColorPalette, StyledColor, StyledColorsList } from './ColorPicker.styled'
import React, { useEffect, useState } from 'react'
import colorsData from '../../assets/colors.json'
// export class ColorPicker extends React.PureComponent {
// 	state = {
// 		colors: colorsData,
// 		currentColor: 'white',
// 	}

// 	componentDidUpdate(prevProps, prevState) {
// 		console.log(this.state.currentColor)
// 	}

// 	handleChangeColor = color => {
// 		this.setState({ currentColor: color })
// 	}`
// 	render() {
// 		const { colors, currentColor } = this.state
// 		return (
// 			<StyledBackgroundTheme $bg={currentColor}>
// 				<StyledColorPalette>
// 					<h1>Обраний колір: {currentColor}</h1>
// 					<StyledColorsList>
// 						{colors.map(item => (
// 							<StyledColor onClick={() => this.handleChangeColor(item.color)} key={item.id}>
// 								{item.color}
// 							</StyledColor>
// 						))}
// 					</StyledColorsList>
// 				</StyledColorPalette>
// 			</StyledBackgroundTheme>
// 		)
// 	}
// }

export const ColorPicker = () => {
	const [colors] = useState(colorsData)
	const [currentColor, setCurrentColor] = useState('white')

	useEffect(() => {
		if (currentColor === 'yellow') {
			console.log('SMTH wrong')
		}
	}, [currentColor])
	useEffect(() => {
		console.log('hello friend!')
	}, [])

	const handleChangeColor = color => {
		// this.setState({ currentColor: color })
		setCurrentColor(color)
	}
	return (
		<StyledBackgroundTheme $bg={currentColor}>
			<StyledColorPalette>
				<h1>Обраний колір: {currentColor}</h1>
				<StyledColorsList>
					{colors.map(item => (
						<StyledColor onClick={() => handleChangeColor(item.color)} key={item.id}>
							{item.color}
						</StyledColor>
					))}
				</StyledColorsList>
			</StyledColorPalette>
		</StyledBackgroundTheme>
	)
}
