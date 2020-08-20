import { UPDATE_STREAMING_PROVIDERS, CLEAR_MOVIE_DATA } from '../types';
import { initialState } from './initialState';

const movieReducer = (state, action) => {
	const { type, payload = null } = action;

	switch(type) {
		case UPDATE_STREAMING_PROVIDERS:
			console.log({ ...state, streamingProviders: payload })
			return { ...state, streamingProviders: payload };
		case CLEAR_MOVIE_DATA:
			return initialState;
		default:
			return state;
	}
}

export default movieReducer;