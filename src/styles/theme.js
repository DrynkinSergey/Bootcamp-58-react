export const theme = {
	colors: {
		main: '#e2e2e4',
		accent: 'teal',
		bgMain: 'yellow',
		fontColor: 'black',
	},
	backgrounds: {
		main: 'white',
	},
	shadows: {
		default: '2px 1px 2px 1px gray',
		xl: '4px 2px 3px 3px black',
	},
	media: {
		tablet: '568px',
		desktop: '1024px',
	},
	spacing: (value, coef = 4) => `${value * coef}px`,
}
export const darkTheme = {
	colors: {
		main: '#e2e2e4',
		fontColor: 'white',
		accent: 'teal',
		bgMain: 'yellow',
	},
	backgrounds: {
		main: 'black',
	},
	shadows: {
		default: '2px 1px 2px 1px gray',
		xl: '4px 2px 3px 3px black',
	},
	media: {
		tablet: '568px',
		desktop: '1024px',
	},
	spacing: (value, coef = 4) => `${value * coef}px`,
}
