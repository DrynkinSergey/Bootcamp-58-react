import { StyledBackgroundTheme, StyledColorPalette, StyledColor, StyledColorsList } from './ColorPicker.styled'
import React from 'react'
import colorsData from '../../assets/colors.json'
export class ColorPicker extends React.Component {
	state = {
		colors: colorsData,
		currentColor: 'white',
	}
	handleChangeColor = color => {
		this.setState({ currentColor: color })
	}
	render() {
		const { colors, currentColor } = this.state
		return (
			<StyledBackgroundTheme $bg={currentColor}>
				<StyledColorPalette>
					<h1>Обраний колір: {currentColor}</h1>
					<StyledColorsList>
						{colors.map(item => (
							<StyledColor onClick={() => this.handleChangeColor(item.color)} key={item.id}>
								{item.color}
							</StyledColor>
						))}
					</StyledColorsList>
				</StyledColorPalette>
			</StyledBackgroundTheme>
		)
	}
}
// export const ColorPicker = () => {
// 	return (
// 		<StyledBackgroundTheme>
// 			<StyledColorPalette>
// 				<StyledColorsList>
// 					{colors.map(item => (
// 						<StyledColor key={item.id}>{item.color}</StyledColor>
// 					))}
// 				</StyledColorsList>
// 			</StyledColorPalette>
// 		</StyledBackgroundTheme>
// 	)
// }
