import React, { useReducer, createContext } from 'react';
import { initialState } from './initialState';
import movieReducer from './reducer';

const MovieContext = createContext({
	state: initialState,
	dispatch: () => null
});

function MovieContextProvider (props) {
	const [state, dispatch] = useReducer(movieReducer, initialState);
	const value = { state, dispatch };

	return (
		<MovieContext.Provider value={value}>
			{props.children}
		</MovieContext.Provider>
	);
}

export { MovieContextProvider, MovieContext };