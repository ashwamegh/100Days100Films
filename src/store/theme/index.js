import React, { useReducer, createContext } from 'react';
import { initialState } from './initialState';
import themeReducer from './reducer';

const ThemeContext = createContext({
	state: initialState,
	dispatch: () => null
});

function ThemeContextProvider (props) {
	const [state, dispatch] = useReducer(themeReducer, initialState);
	const value = { state, dispatch };

	return (
		<ThemeContext.Provider value={value}>
			{props.children}
		</ThemeContext.Provider>
	);
}

export { ThemeContextProvider, ThemeContext };