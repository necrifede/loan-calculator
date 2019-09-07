import { UPDATE_MONTHS } from '../actions';

const initialState = {
	value: 96,
	min: 24,
	max: 96,
};

export default function months(state = initialState, action) {
	switch (action.type) {
		case UPDATE_MONTHS:
			state = { ...state, value: action.value };
			break;

		default:
			break;
	}
	return state;
}
