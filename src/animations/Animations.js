export const animateFromBottom = {
	visible: custom => ({
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			delay: custom * 0.2,
		},
	}),
	hidden: {
		y: 400,
		opacity: 0,
	},
}
export const animateFromDirection = {
	visible: custom => ({
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.3,
			delay: custom.delay * 0.3,
		},
	}),
	hidden: custom => ({
		x: custom.direction === 'left' ? -300 : 100,
		opacity: 0,
	}),
}
export const animateItems = {
	visible: custom => ({
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.4,
		},
	}),
	hidden: {
		y: 20,
		opacity: 0,
	},
	exit: {
		opacity: 0,
		scale: 0,
	},
}
