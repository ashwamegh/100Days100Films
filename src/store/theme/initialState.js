import { customThemes, randomNumber } from './../../helper/constants';
const themesArray = Object.keys(customThemes);
const randomTheme = customThemes[themesArray[randomNumber(0, themesArray.length - 1)]];

const initialState = {
	...randomTheme
}

export { initialState }