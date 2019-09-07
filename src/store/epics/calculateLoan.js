import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { updateSummaries } from '../../actionCreators';
import CALC_LOAN_SEND from '../actions';
import { Requests } from '../../utils';

const { map, mergeMap } = require('rxjs/operators');

export const requestLoanCalc = (amount, time, insurance) => ({
	type: CALC_LOAN_SEND,
	payload: { amount, time, insurance },
});

const calculateLoanEpic = action$ =>
	action$.pipe(
		ofType(CALC_LOAN_SEND),
		mergeMap(({ payload }) =>
			ajax
				.getJSON(Requests.adjustLoan(payload.amount, payload.time, payload.insurance))
				.pipe(map(response => updateSummaries(response)))
		)
	);

export default calculateLoanEpic;
