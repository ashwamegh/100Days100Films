export const customThemes = {
	'Black & White': {
		backgroundColor: "#fff",
		color: "#000"
	},
	'Burn Out': {
		backgroundColor: "#FCD215",
		color: "#000"
	},
	'White & Black': {
		color: "#fff",
		backgroundColor: "#000"
	},
	'Reverse Burn Out': {
		color: "#FCD215",
		backgroundColor: "#000"
	},
	'Red & Yellow': {
		color: "red",
		backgroundColor: "yellow"
	}
}

export function randomNumber(min, max) {  
	return Math.floor(
		Math.random() * (max - min + 1) + min
	)
}