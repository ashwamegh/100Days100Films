import { UPDATE_CURRENT_THEME, CLEAR } from '../types';
import { initialState } from './initialState'

const themeReducer = (state, action) => {
	const { type, payload = null } = action;

	switch(type) {
		case UPDATE_CURRENT_THEME:
			return { ...state, ...payload };
		case CLEAR:
			return initialState;
		default:
			return state;
	}
}

export default themeReducer;