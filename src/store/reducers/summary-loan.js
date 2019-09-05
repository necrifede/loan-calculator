import { UPDATE_SUMMARY_FIELDS } from '../actions';

const initialState = {
  monthly: 0,
  interest: 0,
  apr: 0,
  insurance: 0,
  total: 0,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SUMMARY_FIELDS:
      return {...state, ...action.payload};
    default:
      return state;
  }
}
