import { UPDATE_WITH_INSURANCE } from '../actions';

const initialState = {
  with: false,
};

export default function insurance(state = initialState, action) {
  switch (action.type) {
    case UPDATE_WITH_INSURANCE:
      state = {...state, with: action.value};
      break;

    default:
      break;
  }
  return state;
}
