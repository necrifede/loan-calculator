import { UPDATE_LOAN } from '../actions';

const initialState = {
	value: 100000,
	min: 20000,
	max: 800000,
};

export default function borrow(state = initialState, action) {
	switch (action.type) {
		case UPDATE_LOAN:
			state = { ...state, value: action.value };
			break;

		default:
			break;
	}
	return state;
}
