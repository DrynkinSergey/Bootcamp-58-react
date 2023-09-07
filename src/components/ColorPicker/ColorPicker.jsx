import { StyledBackgroundTheme, StyledColorPalette, StyledColor, StyledColorsList } from './ColorPicker.styled'
import React from 'react'
import colors from '../../assets/colors.json'
export const ColorPicker = () => {
	return (
		<StyledBackgroundTheme>
			<StyledColorPalette>
				<StyledColorsList>
					{colors.map(item => (
						<StyledColor key={item.id}>{item.color}</StyledColor>
					))}
				</StyledColorsList>
			</StyledColorPalette>
		</StyledBackgroundTheme>
	)
}
