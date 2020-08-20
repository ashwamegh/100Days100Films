import { UPDATE_STREAMING_PROVIDERS, CLEAR_MOVIE_DATA, SET_MOVIE_PROVIDERS } from '../types';
import { initialState } from './initialState';

const movieReducer = (state, action) => {
	const { type, payload = null } = action;

	switch(type) {
		case UPDATE_STREAMING_PROVIDERS:
			return { ...state, streamingProviders: payload };
		case SET_MOVIE_PROVIDERS:
			return { ...state, movieProviders: payload };
		case CLEAR_MOVIE_DATA:
			return initialState;
		default:
			return state;
	}
}

export default movieReducer;